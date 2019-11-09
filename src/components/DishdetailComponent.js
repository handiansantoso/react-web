import React, {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }
    renderDish(dish) {
        if(dish != null){
            return(                
                <Card className="col-12 col-md-5 m-1">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
    renderComments(comments) {
        if(comments != null) {
            const comment = comments.map((comment)=>{
                return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </li>
                
                );
            });
            return(
                <div className="col-12 col-md-5 m-1 text-left">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>                    
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }
    render() {
        if(this.props.dish == null)
            return (<div></div>);
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>
        );
    }
}

export default DishDetail;