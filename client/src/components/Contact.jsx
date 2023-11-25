import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact{" "}
            <span className="font-semibold">
              {listing.username} for{" "}
              <span className="font-semibold">{listing.name}</span>
            </span>
          </p>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message here..."
            value={message}
            rows="2"
            onChange={onChange}
            className="w-full border p-3 rounded-lg"
          />
          <Link
            to={`mailto:${listing.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="text-white bg-slate-700 uppercase rounded-lg p-3 hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
