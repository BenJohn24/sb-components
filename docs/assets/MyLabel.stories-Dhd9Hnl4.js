import{j as v}from"./jsx-runtime-D_zvdyIk.js";const x=({label:C,size:b="normal",allcaps:f,color:T,fontColor:h})=>v.jsxs("span",{className:`${b} ${f&&"uppercase"} ${T}`,style:{color:h},children:[" ",C," "]});x.__docgenInfo={description:`! Todas son opcionales\r
allCaps: boolean\r
color: 'text-primary' | 'text-secondary' | 'text-tertiary'\r
fontColor?: string, texto del span`,methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allcaps:{required:!1,tsType:{name:"boolean"},description:"Uppercase Text"},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color Text"},fontColor:{required:!1,tsType:{name:"string"},description:"Background Color Text"}}};const q={title:"UI/Labels/MyLabel",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={argTypes:{fontColor:{control:"color"}},args:{label:"Basic label",allcaps:!0,color:"text-tertiary"}},r={args:{label:"All Caps label",allcaps:!0,color:"text-tertiary"},argTypes:{fontColor:{control:"color"}}},a={args:{label:"Secondary label",allcaps:!0,color:"text-tertiary"},argTypes:{fontColor:{control:"color"}}},o={args:{label:"Custom Color label",allcaps:!0,color:"text-tertiary"},argTypes:{fontColor:{control:"color"}}};var l,t,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    fontColor: {
      control: 'color'
    }
  },
  args: {
    label: 'Basic label',
    allcaps: true,
    color: 'text-tertiary'
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allcaps: true,
    color: 'text-tertiary'
  },
  argTypes: {
    fontColor: {
      control: 'color'
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,m,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    allcaps: true,
    color: 'text-tertiary'
  },
  argTypes: {
    fontColor: {
      control: 'color'
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    allcaps: true,
    color: 'text-tertiary'
  },
  argTypes: {
    fontColor: {
      control: 'color'
    }
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const B=["Basic","AllCaps","Secondary","CustomColor"];export{r as AllCaps,e as Basic,o as CustomColor,a as Secondary,B as __namedExportsOrder,q as default};
