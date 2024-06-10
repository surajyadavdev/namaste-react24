import moment from 'moment';

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <h2>This is contact us page....</h2>
            <h3>last Updated: <b>{moment().format()}</b></h3>
            <h3>last Updated: <b>{moment().format('MMMM Do YYYY, h:mm:ss a')}</b></h3>
            <h3>last Updated: <b>{moment().format('do MMMM  YYYY, h:mm:ss a')}</b></h3>

        </div>
    );
};
export default Contact;