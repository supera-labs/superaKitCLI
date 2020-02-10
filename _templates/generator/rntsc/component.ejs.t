---
to: src/components/<%=name %>/<%= h.capitalize(name) %>.tsx
---

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'

export default class <%= h.capitalize(name) %> extends React.Component<any, any> {

    constructor(props: any) {
        super();
    }

    componentDidMount() {
        
    }

    render() {
        return (
			<View>
				<Text>
					Component <%=name%> rendered !!
				</Text>
			</View>
		)
    }
}
