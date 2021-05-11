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

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value,
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
            <Form.Control ref={this.inputRef} className="mt-2 w-50" onChange={this.handleChange} type="text" value={inputText} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-4">Textarea</Form.Label>
            <Form.Control ref={this.textareaRef} className="mt-2 w-50" onChange={this.handleChange} as="textarea" rows={3} value={textareaText} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-4">Select</Form.Label>
            <Form.Control ref={this.selectRef} className="mt-2 w-50" value={selectText} onClick={this.handleSelectChange} onChange={this.handleChange} as="select">
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