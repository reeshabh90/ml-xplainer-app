'use client'
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = {};

export default function D3Line() {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();
        const width = 600, height = 220, margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const x = d3.scaleLinear().domain([0, 10]).range([margin.left, width - margin.right]);
        const y = d3.scaleLinear().domain([0, 10]).range([height - margin.bottom, margin.top]);

        const line = d3.line()
            .x((d: any) => x(d.x))
            .y((d: any) => y(d.y))
            .curve(d3.curveMonotoneX);

        const base = d3.range(11).map(i => ({ x: i, y: Math.max(0, Math.sin(i / 2) * 4 + 5) }));

        svg.attr('viewBox', `0 0 ${width} ${height}`);
        svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5));
        svg.append('g').attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5));

        svg.append('path')
            .datum(base)
            .attr('fill', 'none')
            .attr('stroke', '#2563eb')
            .attr('stroke-width', 3)
            .attr('d', line as any)
            .attr('stroke-linecap', 'round');

        svg.selectAll('circle').data(base).join('circle')
            .attr('cx', (d: any) => x(d.x))
            .attr('cy', (d: any) => y(d.y))
            .attr('r', 3)
            .attr('fill', '#1d4ed8');

    }, []);

    return <svg ref={ref} className="w-full h-[220px]" />;
}
