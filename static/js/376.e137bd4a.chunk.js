"use strict";(self.webpackChunkayubsubagiya=self.webpackChunkayubsubagiya||[]).push([[376],{995:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});var t=s(43),r=s(869),i=s(216),c=s(436),o=s(579);const l=()=>{const e=(0,i.Zp)(),a=(0,i.zy)(),s=new URLSearchParams(a.search).get("name"),[l,n]=(0,t.useState)(1),[d,m]=(0,t.useState)(1),[h,u]=(0,t.useState)([1,2,3]),{loading:g,error:p,data:x}=(0,r.IT)(c.Yh),{loading:b,error:y,data:j}=(0,r.IT)(c.EM,{variables:{locationName:s,page:l},skip:!s}),f=j?j.locations.results[0].residents.length:0,k=Math.ceil(f/16),N=e=>{n(e),m(e),v(e)},v=(0,t.useCallback)((e=>{u(k<=3?[...Array(k).keys()].map((e=>e+1)):1===e?[1,2,3]:e===k?[k-2,k-1,k]:[e-1,e,e+1])}),[k]);return(0,t.useEffect)((()=>{v(l)}),[l,k,v]),(0,t.useEffect)((()=>{n(1),m(1),v(1)}),[s,v]),g?(0,o.jsx)("p",{children:"Loading locations..."}):p?(0,o.jsxs)("p",{children:["Error ",p.message]}):(0,o.jsxs)("div",{className:"character-by-location p-4",children:[(0,o.jsx)("h1",{className:"text-2xl font-bold mb-4 text-center",children:"Characters by Location"}),(0,o.jsxs)("form",{className:"max-w-sm mx-auto mb-4",children:[(0,o.jsx)("label",{htmlFor:"locations",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select a location"}),(0,o.jsxs)("select",{id:"locations",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:a=>{const s=a.target.value;e(`/location?name=${s}`)},value:s||"",children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"Select a location"}),x&&x.locations&&x.locations.results.map((e=>(0,o.jsx)("option",{value:e.name,children:e.name},e.id)))]})]}),s&&(0,o.jsx)("div",{className:"characters-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:b?(0,o.jsx)("p",{children:"Loading characters..."}):y?(0,o.jsxs)("p",{children:["Error ",y.message]}):j&&j.locations&&j.locations.results.length>0&&0===j.locations.results[0].residents.length?(0,o.jsx)("p",{children:"There is no character here"}):j.locations.results[0].residents.slice(16*(l-1),16*l).map((a=>(0,o.jsxs)("div",{className:"character-item bg-white shadow-md rounded-lg overflow-hidden",onClick:()=>(a=>{e(`/character/${a.id}`)})(a),children:[(0,o.jsx)("img",{src:a.image,alt:a.name,className:"w-full h-48 object-cover"}),(0,o.jsxs)("div",{className:"p-4",children:[(0,o.jsx)("p",{className:"font-bold text-lg",children:a.name}),(0,o.jsxs)("p",{className:"text-gray-600",children:[a.status," - ",a.species]})]})]},a.id)))}),k>1&&(0,o.jsxs)("div",{className:"pagination flex justify-center mt-4",children:[(0,o.jsx)("button",{onClick:()=>N(l-1),disabled:1===l,className:"px-4 py-2 bg-blue-500 text-white rounded mx-1",children:"Previous"}),h.map((e=>(0,o.jsx)("button",{onClick:()=>N(e),className:`px-4 py-2 ${d===e?"bg-gray-500":"bg-blue-500"} text-white rounded mx-1`,children:e},e))),(0,o.jsx)("button",{onClick:()=>N(l+1),disabled:l===k,className:"px-4 py-2 bg-blue-500 text-white rounded mx-1",children:"Next"})]})]})}},436:(e,a,s)=>{s.d(a,{EM:()=>c,MV:()=>r,Sj:()=>l,Yh:()=>o,iZ:()=>i});var t=s(459);const r=t.J1`
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
    }`,i=t.J1`
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
    }`,o=t.J1`
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
    }`,l=t.J1`
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
//# sourceMappingURL=376.e137bd4a.chunk.js.map