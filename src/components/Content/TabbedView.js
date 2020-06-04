import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const TabbedView = ({className, items, renderItem}) => {
    const [active, setActive] = useState(0)
    return (
        <div className='tabs-container'>
            <nav className='tabs is-centered'>
                <ul>
                    {items.map(({title}, idx) => (
                        <li className={idx === active ? 'is-active' : ''} key={title}>
                            <Button onClick={() => setActive(idx)}>{title}</Button>
                        </li>
                    ))}
                </ul>
            </nav>
            <Card elevation={0}>
                <CardMedia component="img" image={items[active].image}/>
                <CardContent>{items[active].content}</CardContent>
            </Card>
        </div>
    )
}

export default TabbedView
