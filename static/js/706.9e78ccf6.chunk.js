"use strict";(self.webpackChunkayubsubagiya=self.webpackChunkayubsubagiya||[]).push([[706],{706:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(43),a=t(869),i=t(326),s=t(48),o=t(277),c=t(902),l=t(36),d=t(832),u=t(190),h=t(622).Sw?s.useLayoutEffect:s.useEffect;var m=t(216),g=t(436),p=t(579);const v=()=>{const{id:e}=(0,m.g)(),r=(0,m.Zp)(),{loading:t,error:v,data:j}=(0,a.IT)(g.iZ,{variables:{id:e}}),[x,f]=(0,n.useState)(""),{loading:y,error:C,data:I}=(0,a.IT)(g.Yh),[b,{error:E}]=function(e,r){var t=(0,u.m)(null===r||void 0===r?void 0:r.client);(0,l.D$)(e,l.KG.Mutation);var n=s.useState({called:!1,loading:!1,client:t}),a=n[0],m=n[1],g=s.useRef({result:a,mutationId:0,isMounted:!0,client:t,mutation:e,options:r});h((function(){Object.assign(g.current,{client:t,options:r,mutation:e})}));var p=s.useCallback((function(e){void 0===e&&(e={});var r=g.current,t=r.options,n=r.mutation,a=(0,i.Cl)((0,i.Cl)({},t),{mutation:n}),s=e.client||g.current.client;g.current.result.loading||a.ignoreResults||!g.current.isMounted||m(g.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:s});var l=++g.current.mutationId,u=(0,o.l)(a,e);return s.mutate(u).then((function(r){var t,n,a=r.data,i=r.errors,o=i&&i.length>0?new d.K4({graphQLErrors:i}):void 0,h=e.onError||(null===(t=g.current.options)||void 0===t?void 0:t.onError);if(o&&h&&h(o,u),l===g.current.mutationId&&!u.ignoreResults){var p={called:!0,loading:!1,data:a,error:o,client:s};g.current.isMounted&&!(0,c.L)(g.current.result,p)&&m(g.current.result=p)}var v=e.onCompleted||(null===(n=g.current.options)||void 0===n?void 0:n.onCompleted);return o||null===v||void 0===v||v(r.data,u),r})).catch((function(r){var t;if(l===g.current.mutationId&&g.current.isMounted){var n={loading:!1,error:r,data:void 0,called:!0,client:s};(0,c.L)(g.current.result,n)||m(g.current.result=n)}var a=e.onError||(null===(t=g.current.options)||void 0===t?void 0:t.onError);if(a)return a(r,u),{data:void 0,errors:r};throw r}))}),[]),v=s.useCallback((function(){if(g.current.isMounted){var e={called:!1,loading:!1,client:g.current.client};Object.assign(g.current,{mutationId:0,result:e}),m(e)}}),[]);return s.useEffect((function(){var e=g.current;return e.isMounted=!0,function(){e.isMounted=!1}}),[]),[p,(0,i.Cl)({reset:v},a)]}(g.Sj),[L,$]=(0,n.useState)(null);if(t||y)return(0,p.jsx)("p",{children:"Loading..."});if(v)return(0,p.jsxs)("p",{children:["Error ",v.message]});if(C)return(0,p.jsxs)("p",{children:["Error ",C.message]});const{character:k}=j;return(0,p.jsxs)("div",{className:"character-detail",children:[(0,p.jsxs)("div",{className:"character-header",children:[(0,p.jsx)("img",{src:k.image,alt:k.name}),(0,p.jsx)("h1",{children:k.name})]}),(0,p.jsxs)("div",{className:"character-info",children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Status:"})," ",k.status]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Species:"})," ",k.species]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Type:"})," ",k.type||"N/A"]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Gender:"})," ",k.gender]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Origin:"})," ",k.origin.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Last known location:"})," ",k.location.name]})]}),(0,p.jsxs)("div",{className:"character-episodes",children:[(0,p.jsx)("h2",{children:"Episodes:"}),(0,p.jsx)("ul",{children:k.episode.map((e=>(0,p.jsxs)("li",{children:[e.name," (",e.episode,")"]},e.id)))})]}),(0,p.jsxs)("form",{onSubmit:async r=>{r.preventDefault(),$(null);try{await b({variables:{characterId:e,locationId:x}}),alert("Character assigned to location successfully")}catch(t){console.error("Error response:",t),$(E?E.message:t.message)}},children:[(0,p.jsxs)("select",{value:x,onChange:e=>f(e.target.value),required:!0,children:[(0,p.jsx)("option",{value:"",disabled:!0,children:"Select a location"}),I&&I.locations&&Array.isArray(I.locations.results)&&I.locations.results.map((e=>(0,p.jsx)("option",{value:e.id,children:e.name},e.id)))]}),(0,p.jsx)("button",{type:"submit",children:"Assign to Location"})]}),L&&(0,p.jsxs)("p",{className:"error",children:["Error: ",L]}),(0,p.jsxs)("div",{className:"navigation-buttons",children:[(0,p.jsx)("button",{onClick:()=>r("/character-list"),children:"Back to Character List"}),(0,p.jsx)("button",{onClick:()=>r("/location"),children:"Back to CharacterByLocation"})]})]})}},436:(e,r,t)=>{t.d(r,{EM:()=>s,MV:()=>a,Sj:()=>c,Yh:()=>o,iZ:()=>i});var n=t(459);const a=n.J1`
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
    }`,i=n.J1`
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
    }`,s=n.J1`
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
    }`,o=n.J1`
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
    }`,c=n.J1`
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
//# sourceMappingURL=706.9e78ccf6.chunk.js.map