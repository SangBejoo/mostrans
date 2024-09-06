"use strict";(self.webpackChunkayubsubagiya=self.webpackChunkayubsubagiya||[]).push([[706],{706:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(43),a=t(789),i=t(326),s=t(48),o=t(277),c=t(902),l=t(470),d=t(832),u=t(190),h=t(622).Sw?s.useLayoutEffect:s.useEffect;var m=t(216),p=t(436),g=t(579);const v=()=>{const{id:e}=(0,m.g)(),r=(0,m.Zp)(),{loading:t,error:v,data:j}=(0,a.IT)(p.iZ,{variables:{id:e}}),[x,f]=(0,n.useState)(""),{loading:y,error:C,data:I}=(0,a.IT)(p.Yh),[b,{error:E}]=function(e,r){var t=(0,u.m)(null===r||void 0===r?void 0:r.client);(0,l.D$)(e,l.KG.Mutation);var n=s.useState({called:!1,loading:!1,client:t}),a=n[0],m=n[1],p=s.useRef({result:a,mutationId:0,isMounted:!0,client:t,mutation:e,options:r});h((function(){Object.assign(p.current,{client:t,options:r,mutation:e})}));var g=s.useCallback((function(e){void 0===e&&(e={});var r=p.current,t=r.options,n=r.mutation,a=(0,i.Cl)((0,i.Cl)({},t),{mutation:n}),s=e.client||p.current.client;p.current.result.loading||a.ignoreResults||!p.current.isMounted||m(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:s});var l=++p.current.mutationId,u=(0,o.l)(a,e);return s.mutate(u).then((function(r){var t,n,a=r.data,i=r.errors,o=i&&i.length>0?new d.K4({graphQLErrors:i}):void 0,h=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(o&&h&&h(o,u),l===p.current.mutationId&&!u.ignoreResults){var g={called:!0,loading:!1,data:a,error:o,client:s};p.current.isMounted&&!(0,c.L)(p.current.result,g)&&m(p.current.result=g)}var v=e.onCompleted||(null===(n=p.current.options)||void 0===n?void 0:n.onCompleted);return o||null===v||void 0===v||v(r.data,u),r})).catch((function(r){var t;if(l===p.current.mutationId&&p.current.isMounted){var n={loading:!1,error:r,data:void 0,called:!0,client:s};(0,c.L)(p.current.result,n)||m(p.current.result=n)}var a=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(a)return a(r,u),{data:void 0,errors:r};throw r}))}),[]),v=s.useCallback((function(){if(p.current.isMounted){var e={called:!1,loading:!1,client:p.current.client};Object.assign(p.current,{mutationId:0,result:e}),m(e)}}),[]);return s.useEffect((function(){var e=p.current;return e.isMounted=!0,function(){e.isMounted=!1}}),[]),[g,(0,i.Cl)({reset:v},a)]}(p.Sj),[L,$]=(0,n.useState)(null);if(t||y)return(0,g.jsx)("p",{children:"Loading..."});if(v)return(0,g.jsxs)("p",{children:["Error ",v.message]});if(C)return(0,g.jsxs)("p",{children:["Error ",C.message]});const{character:k}=j;return(0,g.jsxs)("div",{className:"character-detail",children:[(0,g.jsx)("button",{onClick:()=>r("/character-list"),children:"Back to Character List"}),(0,g.jsx)("button",{onClick:()=>r("/location"),children:"Back to CharacterByLocation"}),(0,g.jsx)("img",{src:k.image,alt:k.name}),(0,g.jsx)("h1",{children:k.name}),(0,g.jsxs)("div",{className:"character-info",children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Status:"})," ",k.status]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Species:"})," ",k.species]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Type:"})," ",k.type||"N/A"]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Gender:"})," ",k.gender]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Origin:"})," ",k.origin.name]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Last known location:"})," ",k.location.name]})]}),(0,g.jsxs)("div",{className:"character-episodes",children:[(0,g.jsx)("h2",{children:"Episodes:"}),(0,g.jsx)("ul",{children:k.episode.map((e=>(0,g.jsxs)("li",{children:[e.name," (",e.episode,")"]},e.id)))})]}),(0,g.jsxs)("form",{onSubmit:async r=>{r.preventDefault(),$(null);try{await b({variables:{characterId:e,locationId:x}}),alert("Character assigned to location successfully")}catch(t){console.error("Error response:",t),$(E?E.message:t.message)}},children:[(0,g.jsxs)("select",{value:x,onChange:e=>f(e.target.value),required:!0,children:[(0,g.jsx)("option",{value:"",disabled:!0,children:"Select a location"}),I&&I.locations&&Array.isArray(I.locations.results)&&I.locations.results.map((e=>(0,g.jsx)("option",{value:e.id,children:e.name},e.id)))]}),(0,g.jsx)("button",{type:"submit",children:"Assign to Location"})]}),L&&(0,g.jsxs)("p",{className:"error",children:["Error: ",L]})]})}},436:(e,r,t)=>{t.d(r,{EM:()=>s,MV:()=>a,Sj:()=>c,Yh:()=>o,iZ:()=>i});var n=t(457);const a=n.J1`
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
//# sourceMappingURL=706.887fec12.chunk.js.map