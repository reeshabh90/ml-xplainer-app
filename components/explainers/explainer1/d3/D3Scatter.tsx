'use client'
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = {};

export default function D3Scatter() {
    const ref = useRef<SVGSVGElement | null>(null);
    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();
        const width = 600, height = 220, margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const data = d3.range(25).map(i => ({ x: Math.random() * 10, y: Math.random() * 10 }));
        const x = d3.scaleLinear().domain([0, 10]).range([margin.left, width - margin.right]);
        const y = d3.scaleLinear().domain([0, 12]).range([height - margin.bottom, margin.top]);

        svg.attr('viewBox', `0 0 ${width} ${height}`);
        svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));
        svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

        svg.selectAll('circle').data(data).join('circle')
            .attr('cx', d => x(d.x))
            .attr('cy', d => y(d.y))
            .attr('r', 4)
            .attr('fill', '#059669')
            .attr('opacity', 0.9);
    }, []);
    return <svg ref={ref} className="w-full h-[220px]" />;
}
