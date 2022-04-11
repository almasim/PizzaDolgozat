import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        function postit(){
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'Pushtermék' })
            };
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ postId: data.id }));
        }
        return (
            
            <div className='BookCardBtn'>

                <Button className='BookCardShow' onClick={this.toggle}>Put</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="BookCardModal" size="lg">
                    <ModalHeader className='ModalTitle' toggle={this.toggle}>Termék módositások</ModalHeader>
                    <ModalBody>
                        <div>
                            <p className='ModalRight '> <span className='ModalTextSpacing'>Név: <input value={this.props.nev}></input></span><br />
                                <span className='ModalTextSpacing'>Ár: <input value={this.props.ar}></input></span><br />
                                <span className='ModalTextSpacing'>Képlink: <input value={this.props.keplink}></input></span><br />
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>

                        <p className='Price'><span className='PriceText'>Price:</span>  {this.props.price} Ft</p>
                        <button className='BuyButton' id='buybutton' onClick={this.toggle}>Buy</button>{' '}
                        <Button className='CancelButton' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
