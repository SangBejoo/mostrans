"use strict";(self.webpackChunkayubsubagiya=self.webpackChunkayubsubagiya||[]).push([[689],{689:(a,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=i(43),n=i(789),r=i(436),t=i(475),l=i(579);const c=a=>{let{character:e}=a;return(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"imgBx",children:(0,l.jsx)("img",{src:e.image,alt:e.name})}),(0,l.jsxs)("div",{className:"contentBx",children:[(0,l.jsx)("h3",{children:e.name}),(0,l.jsxs)("p",{className:"price",children:[e.status," - ",e.species]}),(0,l.jsx)(t.N_,{to:`/character/${e.id}`,className:"buy",children:"View Details"}),(0,l.jsx)(t.N_,{to:`/location?name=${e.location.name}`,className:"location-link",children:"View Same Location"})]})]})},o=()=>{var a,e,i,t,o;const{loading:d,error:m,data:u}=(0,n.IT)(r.MV),{loading:h,error:g,data:p}=(0,n.IT)(r.Yh),[v,x]=(0,s.useState)("");if(d||h)return(0,l.jsx)("p",{children:"Loading..."});if(m)return(0,l.jsxs)("p",{children:["Error: ",m.message]});if(g)return(0,l.jsxs)("p",{children:["Error: ",g.message]});const j=v?null===u||void 0===u||null===(a=u.characters)||void 0===a||null===(e=a.results)||void 0===e?void 0:e.filter((a=>a.location.name===v)):null===u||void 0===u||null===(i=u.characters)||void 0===i?void 0:i.results;return(0,l.jsxs)("div",{className:"character-list-container",children:[(0,l.jsxs)("div",{className:"filter",children:[(0,l.jsx)("label",{htmlFor:"location",className:"filter-label",children:"Filter by Location: "}),(0,l.jsxs)("select",{id:"location",value:v,onChange:a=>{x(a.target.value)},className:"filter-select",children:[(0,l.jsx)("option",{value:"",children:"All Locations"}),null===p||void 0===p||null===(t=p.locations)||void 0===t||null===(o=t.results)||void 0===o?void 0:o.map((a=>(0,l.jsx)("option",{value:a.name,children:a.name},a.id)))]})]}),(0,l.jsx)("div",{className:"gallery",children:null===j||void 0===j?void 0:j.map((a=>(0,l.jsx)(c,{character:a},a.id)))})]})}},436:(a,e,i)=>{i.d(e,{EM:()=>t,MV:()=>n,Sj:()=>c,Yh:()=>l,iZ:()=>r});var s=i(457);const n=s.J1`
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
    }`,r=s.J1`
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
    }`,l=s.J1`
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
    }`,c=s.J1`
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
//# sourceMappingURL=689.16432419.chunk.js.map