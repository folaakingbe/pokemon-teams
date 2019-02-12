import React from 'react';

export default function Pokemon({pokemon: {name, nickname, gender, type1, type2, nature, pokeball}}) {
    console.log(name);
    function nullToBlank(item) {
        if (item == null) {
            return "";
        }
        return item;
    }
    name = nullToBlank(name);
    nickname = nullToBlank(nickname);
    gender = nullToBlank(gender);
    type1 = nullToBlank(type1);
    type2 = nullToBlank(type2);
    nature = nullToBlank(nature);
    pokeball = nullToBlank(pokeball);
    return (
        <div className="card card-body mb-3" style={{backgroundColor: 'blue'}}>
            <div className="row">
                <div className="col-md-9">
                <p>Name: {name}</p>
                <p>Nickname: {nickname}</p>
                <p>Gender: {gender}</p>
                <p>Type1: {type1}</p>
                <p>Type2: {type2}</p>
                <p>Nature: {nature}</p>
                <p>Pokeball: {pokeball}</p>
                </div>
            </div>
        </div> 
    )
}