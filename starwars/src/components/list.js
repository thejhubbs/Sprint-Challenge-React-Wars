import React, { Component } from 'react';
import ListItem from './listItem'

function List(props) {
    return (
        <div>
        { JSON.stringify(props.characters).slice(2, -2).split( '},{' ).map( item => {
            return <ListItem key={item.created} character={item} />
        })}
        </div>
    );
}

export default List;