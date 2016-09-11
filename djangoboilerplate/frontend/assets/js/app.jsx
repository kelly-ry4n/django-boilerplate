var React = require('react')

const Markdown = require('react-markdown');
const connect = require('react-redux').connect

exports = module.exports = {};

exports.About = React.createClass({
    render () {
        return <div>
            <h2> hi </h2>
            
            This is kelly<br />
            <a className="btn waves-effect btn-raised light-green" href="#"> back to the shadows </a>

        </div>
    }

})
exports.ExampleComponent = React.createClass({
   render () {
       return <div className="container">
           <div className="row">
               <div className="col m3">
                   <VisibleStickyPageNav />
               </div>
               <div className="col m9">
                   <VisibleIpsumList />
               </div>
           </div>
       </div>
   },
})

IpsumList = React.createClass({

    render () {

        const ipsums = this.props.ipsums.map( (ipsum) => {
            return <Ipsum key={ipsum.id} ipsum={ipsum} />
        })

        return <div>
            <a className="btn waves-effect btn-raised light-blue" href="#about"> button </a>
                <ExampleJumbotron />
                
                    <sections>
                        {ipsums}
                    </sections>
        </div>

    }
})

mapStateToProps = function(state) {
    return {
        ipsumsLoaded: state.ipsumsLoaded,
        ipsums: state.ipsums,
    }
}

VisibleIpsumList = connect(mapStateToProps)(IpsumList)

StickyPageNav = React.createClass({
    render () {

        ipsums = this.props.ipsums.map( (ipsum) => {
            return <li key={ipsum.id} className="collection-item"> <a href={"#ipsum"+ipsum.id} > {ipsum.title} </a></li>
        })

        return <ul className="collection">
                {ipsums}
            </ul>
    }
})

VisibleStickyPageNav = connect(mapStateToProps)(StickyPageNav)
class ExampleJumbotron extends React.Component {

    render() {
        return <div className="jumbotron" role="region" >
            <h1>Hi rn!</h1>
            <p>This is some p text 4 u!</p>
            <a className="btn waves-effect btn-raised green"> click here 2 luv me </a>
        </div>
    }
}


class Ipsum extends React.Component{
    render() {
        return <section id={'ipsum'+this.props.ipsum.id} data-magellan-target={'ipsum'+this.props.ipsum.id}>
                <h2>{this.props.ipsum.title}</h2>
                <Markdown source={this.props.ipsum.text} />
            </section>
    }

}

