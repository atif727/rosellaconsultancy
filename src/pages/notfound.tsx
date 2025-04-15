import { Empty, Typography } from "antd";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-64px)] flex justify-center items-center">
        <div>
          <Empty
            styles={{ image: { height: 150 } }}
            description={
              <div>
                <h1 className="text-5xl mb-2 text-fuchsia-700">404</h1>
                <Typography.Text>NOT FOUND, WRONG ROUTE</Typography.Text>
              </div>
            }
          >
            <button
              className="bg-cyan-400 px-3 py-1 rounded-lg cursor-pointer"
              onClick={() => navigate("/")}
            >
              GO BACK HOME
            </button>
          </Empty>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
