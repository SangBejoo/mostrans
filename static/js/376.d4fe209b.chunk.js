"use strict";(self.webpackChunkayubsubagiya=self.webpackChunkayubsubagiya||[]).push([[376],{376:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});s(43);var t=s(789),i=s(216),r=s(436),c=s(579);const n=()=>{const e=(0,i.Zp)(),a=(0,i.zy)(),s=new URLSearchParams(a.search).get("name"),{loading:n,error:o,data:l}=(0,t.IT)(r.Yh),{loading:d,error:m,data:h}=(0,t.IT)(r.EM,{variables:{locationName:s},skip:!s});return n?(0,c.jsx)("p",{children:"Loading locations..."}):o?(0,c.jsxs)("p",{children:["Error ",o.message]}):(0,c.jsxs)("div",{className:"character-by-location p-4",children:[(0,c.jsx)("h1",{className:"text-2xl font-bold mb-4 text-center",children:"Characters by Location"}),(0,c.jsx)("div",{className:"locations-list flex flex-wrap justify-center gap-2 mb-4",children:l&&l.locations&&l.locations.results.map((a=>(0,c.jsx)("button",{onClick:()=>(a=>{e(`/location?name=${a}`)})(a.name),className:"px-4 py-2 bg-blue-500 text-white rounded",children:a.name},a.id)))}),s&&(0,c.jsx)("div",{className:"characters-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:d?(0,c.jsx)("p",{children:"Loading characters..."}):m?(0,c.jsxs)("p",{children:["Error ",m.message]}):h&&h.locations&&h.locations.results.length>0&&0===h.locations.results[0].residents.length?(0,c.jsx)("p",{children:"There is no character here"}):h.locations.results[0].residents.map((a=>(0,c.jsxs)("div",{className:"character-item bg-white shadow-md rounded-lg overflow-hidden",onClick:()=>(a=>{e(`/character/${a.id}`)})(a),children:[(0,c.jsx)("img",{src:a.image,alt:a.name,className:"w-full h-48 object-cover"}),(0,c.jsxs)("div",{className:"p-4",children:[(0,c.jsx)("p",{className:"font-bold text-lg",children:a.name}),(0,c.jsxs)("p",{className:"text-gray-600",children:[a.status," - ",a.species]})]})]},a.id)))})]})}},436:(e,a,s)=>{s.d(a,{EM:()=>c,MV:()=>i,Sj:()=>o,Yh:()=>n,iZ:()=>r});var t=s(457);const i=t.J1`
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
    }`,r=t.J1`
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
    }`,c=t.J1`
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
    }`,n=t.J1`
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
    }`,o=t.J1`
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
//# sourceMappingURL=376.d4fe209b.chunk.js.map