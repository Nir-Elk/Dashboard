import { Area, AreaChart as AreaRechart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { StyledHeader, StyledPaper } from '../Styled'
import React from 'react';

export default function AreaChart(props) {
    const { data, title, subtitle, xKey, yKey, color, width } = props;
    return (
        <StyledPaper width={width}>
            <StyledHeader>
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}$</span>
            </StyledHeader>
            <ResponsiveContainer width='100%' height={240}>
                <AreaRechart
                    style={{ marginLeft: '-30px' }}
                    data={data}
                >
                    <defs>
                        <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={color} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={xKey} tick={false} stroke="none" />
                    <YAxis tick={false} stroke="none" />
                    <Area type="monotone" dataKey={yKey} stroke={color} fillOpacity={1} fill={"url(#"+ color +")"}/>
                    {/*<Area type="monotone" dataKey={yKey} stroke={color} fill={color} />*/}
                </AreaRechart>
            </ResponsiveContainer>
        </StyledPaper>
    )
}