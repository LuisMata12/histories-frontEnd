import { createSlice } from "@reduxjs/toolkit";

const storiesTemporal = [
    {
        img:'https://playmax.xyz/img/c/400/3/1662974269/1064.jpg',
        title:"Pinocho",
        id: 1,
        sumary:' Cortés fue el gran articulador de una alianza que los indígenas en ese momento, subraya Pastrana, entendieron de otra manera. Entonces desconocían que desembocaría en el poder hispano en América."Hasta la caída de Tenochtitlan, los indígenas ven a los españoles como un grupo más de tantos. No concibieron la magnitud del cambio que se avecinaba. No son del todo conscientes de las implicaciones de la presencia española", advierte el investigador.'
    },
    {
        img:'https://playmax.xyz/img/c/400/3/1662974269/1064.jpg',
        title:"Pinocho",
        id: 2,
        sumary:' Cortés fue el gran articulador de una alianza que los indígenas en ese momento, subraya Pastrana, entendieron de otra manera. Entonces desconocían que desembocaría en el poder hispano en América."Hasta la caída de Tenochtitlan, los indígenas ven a los españoles como un grupo más de tantos. No concibieron la magnitud del cambio que se avecinaba. No son del todo conscientes de las implicaciones de la presencia española", advierte el investigador.'
    },
    {
        img:'https://playmax.xyz/img/c/400/3/1662974269/1064.jpg',
        title:"Pinocho",
        id: 3,
        sumary:' Cortés fue el gran articulador de una alianza que los indígenas en ese momento, subraya Pastrana, entendieron de otra manera. Entonces desconocían que desembocaría en el poder hispano en América."Hasta la caída de Tenochtitlan, los indígenas ven a los españoles como un grupo más de tantos. No concibieron la magnitud del cambio que se avecinaba. No son del todo conscientes de las implicaciones de la presencia española", advierte el investigador.'
    }
]

export const storiesSlice = createSlice({
    name:'stories',
    initialState:{
        stories:storiesTemporal
    },
    reducers:{
        addNewStorie:(state,{payload})=>{
            state.stories.push(payload)
        },
        deletestorie:(state,{payload})=>{
             state.stories= state.stories.filter(storie=>{
                if(storie.id == payload){
                    console.log(payload)
                    return 
                }
                return storie
            })
        }

    }
})
export const {deletestorie,addNewStorie} = storiesSlice.actions;
