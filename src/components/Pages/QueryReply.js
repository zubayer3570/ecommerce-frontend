import { useDispatch } from "react-redux";
import { queryReplyThunk } from "../../features/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function QueryReply() {
    const { queryID } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ queryID, subject: e.target.subject.value, message: e.target.message.value })
        dispatch(queryReplyThunk({ queryID, subject: e.target.subject.value, message: e.target.message.value }));
        navigate("/all-user-queries");
        toast.success("Reply sent successfully");
    };

    return (
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 mx-auto mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                Reply to Query
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold bg-3 shadow-md transition text-[white]"
                >
                    Send in Mail
                </button>
            </form>
        </div>
    );
}
