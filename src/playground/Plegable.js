import React from 'react';

class Plegable extends React.Component {
    render() {
        return(
        <div className='contenedor-plegable'>
            <header>
            <i 
            className="fa fa-angle-down fa-5x" 
            aria-hidden="true"> </i>
                <h1 style={{color:'white'}} >Contenido Desplegable </h1>
            </header>
            <div className="content">
                <div className="panel-group">
                    <Collapsible title="Biografia">
                        <p>Biografia.</p>
                    </Collapsible>
                    <Collapsible title="Contacto">
                        <p>Anim pariatur cliche reprehenderit, 
                        enim eiusmod high life accusamus terry richardson 
                        ad squid. 3 wolf moon officia aute.</p>
                    </Collapsible>
                    <Collapsible title="Software">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam optio libero nobis repudiandae possimus, dolor, doloremque recusandae rerum vitae sunt vero, ducimus necessitatibus sequi a voluptates cum ipsam facilis provident quia sint unde repellat molestiae maiores? Molestias ad excepturi aperiam ipsa nam nesciunt, iure beatae aliquam itaque laboriosam mollitia optio pariatur ut nihil molestiae tempora suscipit autem eius dolorem totam sapiente quos maxime! Harum distinctio ad numquam quam ex nostrum repellendus quibusdam possimus accusantium, optio hic doloribus expedita nihil, nulla et voluptas minima quidem. Excepturi ab error iusto facilis aut, at impedit, rerum velit, tempora ratione, consequatur quas esse reprehenderit omnis animi. Quo, tempore. Perspiciatis velit eligendi dignissimos, voluptate, temporibus quod libero odit explicabo quo. Cupiditate, commodi, libero! Laboriosam facere, molestias rerum velit? Eum quaerat, possimus ipsa molestiae non quo nesciunt necessitatibus eligendi tenetur sapiente nostrum praesentium voluptatibus maxime ex nobis. Ducimus modi accusamus voluptates, blanditiis adipisci ipsam. Labore, doloremque sapiente? Quae quia, expedita neque dolorem nostrum ratione natus at iste architecto, eligendi velit beatae perferendis voluptate fugit error. Incidunt esse illo porro, molestias id sed, ab eum omnis excepturi dicta consectetur, numquam debitis maiores saepe blanditiis, quod! Laudantium maiores eum iste at ipsam reiciendis repellendus, aut nobis asperiores eveniet voluptates ad aperiam accusantium est aliquam. Maxime quidem laborum perspiciatis, libero possimus repellendus deserunt, reprehenderit omnis est, officiis amet reiciendis voluptatem nulla ab. Architecto quod, labore quibusdam! Beatae laborum soluta libero dolores possimus illo, eveniet, odit accusamus saepe provident nobis ab. Quisquam est vitae qui hic nobis vel facilis non. Animi vitae quae tempore. Natus nihil nisi perspiciatis veniam, atque eaque accusamus odio excepturi veritatis numquam! Dolorem aperiam, delectus quo inventore veritatis? Labore dignissimos, voluptates vel cumque aperiam adipisci molestias vero accusantium porro placeat laboriosam aut voluptas officia, quisquam eveniet incidunt debitis in perspiciatis, eaque dicta voluptatibus repellendus enim.</p>
                    </Collapsible>
                </div>
            </div>
        </div>
        )
    }   
}
export default Plegable;

class Collapsible extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleToggle = (e) => {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight // solo padding, clientWidtch
        })
    }

    render(){
        const {title, children} = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        return (
            <div className={`panel ${isExpanded ? 'is-expanded' : ' ' }`} 
                onClick={this.handleToggle}
                >
                <div className="panel-heading">
                    <h2>{title}</h2>
                </div>
                    
                    <div 
                    className="panel-collapse" 
                    style={{height: currentHeight+'px'}}
                    >
                        <div className="panel-body" ref="inner">
                            {children}
                        </div>
                </div>
            </div>
        )
    }

}