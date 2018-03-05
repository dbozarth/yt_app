import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    };

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    };

    render() {
        return (
            <div className="container-fluid p-3">
                <Form inline>
                    <FormGroup controlId="formInlineName">
                    <ControlLabel className="p-3_label">Search</ControlLabel>
                    <FormControl
                        type="text"
                        className="p-3_input"
                        value={this.state.term}
                        placeholder="Enter a search term..."
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                    </FormGroup>
                </Form>
            </div>
        )
    };
};

export default SearchBar;