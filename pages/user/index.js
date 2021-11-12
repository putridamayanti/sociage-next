
export default function User(props) {
    const { users } = props;
    console.log(users);
    return (
        <div>
            User
        </div>
    )
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/user`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            users: data,
        },
    };
}