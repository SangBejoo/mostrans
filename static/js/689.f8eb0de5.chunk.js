"use strict";(self.webpackChunkayubsubagiya=self.webpackChunkayubsubagiya||[]).push([[689],{689:(a,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=i(43),n=i(869),c=i(436),t=i(475),r=i(579);const l=a=>{let{character:e}=a;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"imgBx",children:(0,r.jsx)("img",{src:e.image,alt:e.name})}),(0,r.jsxs)("div",{className:"contentBx",children:[(0,r.jsx)("h3",{children:e.name}),(0,r.jsxs)("p",{className:"price",children:[e.status," - ",e.species]}),(0,r.jsx)(t.N_,{to:`/character/${e.id}`,className:"buy",children:"View Details"}),(0,r.jsx)(t.N_,{to:`/location?name=${e.location.name}`,className:"location-link",children:"View Same Location"})]})]})},o=()=>{var a,e,i,t;const{loading:o,error:d,data:m}=(0,n.IT)(c.MV),[u,h]=(0,s.useState)(1);if(o)return(0,r.jsx)("p",{children:"Loading..."});if(d)return(0,r.jsxs)("p",{children:["Error: ",d.message]});const g=Math.ceil((null===m||void 0===m||null===(a=m.characters)||void 0===a||null===(e=a.results)||void 0===e?void 0:e.length)/10),p=10*(u-1),v=null===m||void 0===m||null===(i=m.characters)||void 0===i||null===(t=i.results)||void 0===t?void 0:t.slice(p,p+10);return(0,r.jsxs)("div",{className:"character-list-container",children:[(0,r.jsx)("div",{className:"gallery",children:null===v||void 0===v?void 0:v.map((a=>(0,r.jsx)(l,{character:a},a.id)))}),(0,r.jsx)("div",{className:"pagination",children:Array.from({length:g},((a,e)=>(0,r.jsx)("button",{onClick:()=>{h(e+1)},className:u===e+1?"active":"",children:e+1},e)))})]})}},436:(a,e,i)=>{i.d(e,{EM:()=>t,MV:()=>n,Sj:()=>l,Yh:()=>r,iZ:()=>c});var s=i(459);const n=s.J1`
    query Character($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
                location {
                    name
                }
            }
        }
    }`,c=s.J1`
    query Character($id: ID!) {
        character(id: $id) {
            id
            name
            image
            status
            species
            type
            gender
            origin {
                name
            }
            location {
                name
            }
            episode {
                id
                name
                episode
            }
        }
    }`,t=s.J1`
    query CharactersByLocation($locationName: String!) {
        locations(filter: { name: $locationName }) {
            results {
                id
                name
                residents {
                    id
                    name
                    image
                    status
                    species
                    location {
                        name
                    }
                }
            }
        }
    }`,r=s.J1`
    query GetLocations($page: Int) {
        locations(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                dimension
                type
            }
        }
    }`,l=s.J1`
    mutation AssignCharacterToLocation($characterId: ID!, $locationId: ID!) {
        assignCharacterToLocation(characterId: $characterId, locationId: $locationId) {
            id
            name
            location {
                name
            }
        }
    }
`}}]);
//# sourceMappingURL=689.f8eb0de5.chunk.js.map