import React, { Component } from 'react';
import getState from './flux';

// Here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it

const injectContext = PassedComponent => {
	class StoreWrapper extends Component {

		constructor(props) {
            super(props);
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore =>
                    this.setState({
                        store: Object.assign(this.state.store, updatedStore)
                    })
            });
		}

		componentDidMount() {
            this.state.actions.getResumen();
        }

		render() {
            // the initial value for the context its not null anymore, but the current state of this component,
            // the context will have a getStore and setStore functions available then, because they were declared
            // on the state of this component
            return (
                <Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
            );
        }
	};
	return StoreWrapper;
};

export default injectContext;