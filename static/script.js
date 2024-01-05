fetch('/static/recycled_plastic.json')
    .then(response => response.json())
    .then(data => {
        const entities = [...new Set(data.map(entry => entry.Entity))];
        const years = [...new Set(data.map(entry => entry.Year))];

        const entitySelect = document.getElementById("entitySelect");
        entities.forEach(entity => {
            const option = document.createElement("option");
            option.text = entity;
            entitySelect.add(option);
        });

        const yearSelect = document.getElementById("yearSelect");
        years.forEach(year => {
            const option = document.createElement("option");
            option.text = year;
            yearSelect.add(option);
        });

        let selectedEntity = entities[0];
        let selectedYear = years[0];

        function updateCharts() {
            selectedEntity = entitySelect.value;
            selectedYear = +yearSelect.value; // Convert to number

            const filteredData = data.find(entry => entry.Entity === selectedEntity && entry.Year === selectedYear);

            const metadataInfo = document.getElementById("metadataInfo");
            metadataInfo.innerHTML = `
                <strong>Selected Entity:</strong> ${selectedEntity}<br>
                <strong>Selected Year:</strong> ${selectedYear}<br>
                <strong>Recycled:</strong> ${filteredData.Recycled}<br>
                <strong>Incinerated:</strong> ${filteredData.Incinerated}<br>
                <strong>Mismanaged:</strong> ${filteredData.Mismanaged}<br>
                <strong>Landfilled:</strong> ${filteredData.Landfilled}`;
            
            d3.select("#barChartSvg").selectAll("*").remove();
            d3.select("#donutChartSvg").selectAll("*").remove();

            // Bar Chart
            const barData = [
                { label: "Recycled", value: filteredData.Recycled },
                { label: "Incinerated", value: filteredData.Incinerated },
                { label: "Mismanaged", value: filteredData.Mismanaged },
                { label: "Landfilled", value: filteredData.Landfilled }
            ];

            const barChartSvg = d3.select("#barChartSvg");
            const barWidth = 400;
            const barHeight = 300;
            const barMargin = { top: 20, right: 20, bottom: 30, left: 40 };

            const x = d3.scaleBand()
                .domain(barData.map(d => d.label))
                .range([barMargin.left, barWidth - barMargin.right])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(barData, d => d.value)]).nice()
                .range([barHeight - barMargin.bottom, barMargin.top]);

            barChartSvg.append("g")
                .selectAll("rect")
                .data(barData)
                .join("rect")
                .attr("x", d => x(d.label))
                .attr("y", d => y(d.value))
                .attr("height", d => y(0) - y(d.value))
                .attr("width", x.bandwidth())
                .attr("fill", "steelblue");

            barChartSvg.append("g")
                .attr("transform", `translate(0,${barHeight - barMargin.bottom})`)
                .call(d3.axisBottom(x));

            barChartSvg.append("g")
                .attr("transform", `translate(${barMargin.left},0)`)
                .call(d3.axisLeft(y));

            // Donut Chart
            const donutChartSvg = d3.select("#donutChartSvg");
            const donutWidth = 270;
            const donutHeight = 270;
            const donutRadius = Math.min(donutWidth, donutHeight) / 2;
            const donutMargin = { top: 10, right: 10, bottom: 10, left: 10 };

            const donutArc = d3.arc()
                .innerRadius(donutRadius * 0.6)
                .outerRadius(donutRadius);

            const pie = d3.pie()
                .value(d => d.value)
                .sort(null);

            const color = d3.scaleOrdinal()
                .domain(barData.map(d => d.label))
                .range(d3.schemeCategory10);

            const donutArcs = donutChartSvg.selectAll(".arc")
                .data(pie(barData))
                .enter().append("g")
                .attr("class", "arc")
                .attr("transform", `translate(${donutWidth / 2},${donutHeight / 2})`);

            donutArcs.append("path")
                .attr("d", donutArc)
                .attr("fill", d => color(d.data.label))
                .attr("stroke", "white")
                .style("stroke-width", "2px");
                
            // Legend
            const legend = donutChartSvg.selectAll(".legend")
                .data(barData.map(d => d.label))
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", (d, i) => `translate(-30,${i * 20 + 20})`);

            legend.append("rect")
                .attr("x", donutWidth / 2 - 15)
                .attr("y", donutHeight / 2 - 60)
                .attr("width", 10)
                .attr("height", 10)
                .attr("fill", color);

            legend.append("text")
                .attr("x", donutWidth / 2)
                .attr("y", donutHeight / 2 - 50)
                .attr("dy", "0.32em")
                .text(d => d);

        }

        entitySelect.addEventListener("change", updateCharts);
        yearSelect.addEventListener("change", updateCharts);

        updateCharts();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

