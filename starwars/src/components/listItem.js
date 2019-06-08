import React, { Component } from 'react';

function returnLinks(input) {
    input = JSON.stringify(input);
    if(input) {
        if(input.length > 2) {
            var links = input.slice(1, -1).split('","')
            return links;
        } else {
            return ["N/a"];
        }
    }
    else {
        return ["N/a"];
    }
}

const ListItem = (props) => {
    var character = JSON.parse( "{" + props.character + "}" );
    return (
        <div className="character" key={props.key} >
            <div className="half-section">
            <h3 className="character-name">{ character.name }</h3>
            <p>Born: { character.birth_year}</p>
            <p>{character.gender}, { character.height }cm, { character.mass }kg</p>
            <p>{ character.hair_color } hair, { character.eye_color } eyes, {character.skin_color} skin</p>
            </div>
            <div class="half-section">
            <h5>Links:</h5>
            <p>
                <a href={ character.url } >Main</a> | 
                <a href={ character.homeworld } >Homeworld</a>
            </p>
            <p> Films: { returnLinks(character.films).map(item => { return <a href={item}>x</a>}) } </p>
            <p> Species: { returnLinks(character.species).map(item => { return <a href={item}>x</a>}) } </p>
            <p> Vehicles: { returnLinks(character.vehicles).map(item => { return <a href={item}>x</a>}) }  </p>
            </div>
        </div>
    );
}

export default ListItem;