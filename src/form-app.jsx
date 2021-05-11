import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const POSITIONS = [
  {
    id: 'fd',
    value: 'Frontend Developer',
    title: 'Frontend Developer',
  },
    {
    id: 'bd',
    value: 'Backend Developer',
    title: 'Backend Developer',
  }
]

class FormApp extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showText: {
      showInputText: '',
      showTextareaText: '',
      showSelectText: '',
    }
  }

  handleInputChange = ({ target: {value} }) => {
    this.setState({
      inputText: value,
    })
  }

  handleTextareaChange = ({ target: {value} }) => {
    this.setState({
      textareaText: value,
    })
  }

  handleSelectChange = ({ target: {value} }) => {
    this.setState({
      selectText: value,
    })
  }

  showText = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      showText: {
        showInputText: inputText,
        showTextareaText: textareaText,
        showSelectText: selectText,
      }
    })
  }

  render() {
    const { inputText, textareaText, selectText,showText } = this.state;
    const { showInputText, showTextareaText, showSelectText } = showText;
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label className="mt-4"htmlFor="text">Input text</Form.Label>
            <Form.Control className="mt-2 w-50" onChange={this.handleInputChange} type="text" value={inputText} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-4">Textarea</Form.Label>
            <Form.Control className="mt-2 w-50" onChange={this.handleTextareaChange} as="textarea" rows={3} value={textareaText} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-4">Select</Form.Label>
            <Form.Control className="mt-2 w-50" value={selectText} onClick={this.handleSelectChange} onChange={this.handleSelectChange} as="select">
              {POSITIONS.map(({ id, value, title }) => (
                <option key={id} value={value}>{title}</option>
              ))}
          </Form.Control>
          </Form.Group>
          <Button className="my-5" variant="success" type="submit" onClick={this.showText}>Show</Button>
          <p>{showInputText}</p>
          <p>{showTextareaText}</p>
          <p>{showSelectText}</p>
        </Form>
      </Container>
    );
  }
}

export default FormApp;