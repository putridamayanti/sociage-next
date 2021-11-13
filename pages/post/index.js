import Image from "next/image";
import MainLayout from "../../components/MainLayout";
import PageTitle from "../../components/PageTitle";
import {PlusSmIcon} from "@heroicons/react/solid";
import Link from "next/link";

export default function Post(props) {
    const { posts } = props;

    return (
        <div>
            <MainLayout>
                <PageTitle
                    title="Posts"
                    action={
                        <div>
                            <Link href="/post/create">
                                <button type="button" className="py-2 px-4 flex items-center bg-secondary text-white rounded-lg">
                                    <div className="mr-2">
                                        <PlusSmIcon width={20}/>
                                    </div>
                                    Add
                                </button>
                            </Link>
                        </div>
                    }/>

                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        Jane Cooper
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        jane.cooper@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                            <div className="text-sm text-gray-500">Optimization</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/post`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            posts: data,
        },
    };
}