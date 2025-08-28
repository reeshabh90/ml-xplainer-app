'use client'
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = { step: number };

export default function D3Bar({ step }: Props) {
    const ref = useRef<SVGSVGElement | null>(null);
    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();
        const width = 600, height = 220, margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const data = d3.range(5).map(i => ({ k: `A${i + 1}`, v: Math.round((Math.random() + step * 0.3) * 10) }));
        const x = d3.scaleBand().domain(data.map(d => d.k)).range([margin.left, width - margin.right]).padding(0.2);
        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.v)!]).nice().range([height - margin.bottom, margin.top]);

        svg.attr('viewBox', `0 0 ${width} ${height}`);
        svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));
        svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y).ticks(5));

        svg.selectAll('rect').data(data).join('rect')
            .attr('x', d => x(d.k)!)
            .attr('y', d => y(d.v))
            .attr('width', x.bandwidth())
            .attr('height', d => y(0) - y(d.v))
            .attr('fill', '#ef4444');
    }, [step]);
    return <svg ref={ref} className="w-full h-[220px]" />;
}
