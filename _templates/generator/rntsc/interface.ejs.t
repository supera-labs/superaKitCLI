---
to: src/components/<%=name %>/I<%= h.capitalize(name) %> %>.ts
---
export interface I<%= h.capitalize(name) %> %> {
	[propName:string]: any
}