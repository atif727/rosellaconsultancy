import { Button, Form, Input, Select } from "antd";

type forming = {
  name: string;
  email: string;
};

const onFinish = (values: forming) => {
  console.log(values);
};

function Apply() {
  const [form] = Form.useForm();

  return (
    <div className="p-12 flex justify-center items-center">
      <div className="w-2/4 flex justify-center items-center mt-16 max-md:p-5 md:p-16 bg-gray-100 rounded-2xl shadow-xl">
        
        <Form
          size="large"
          className="w-full"
          layout={"vertical"}
          form={form}
          onFinish={onFinish}
        >
          <h1 className="text-center text-3xl font-bold mb-6">APPLICATION FORM</h1>
          <Form.Item
            name={"number"}
            label="Your Number"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input
              addonBefore="🇧🇩 +88"
              placeholder="input search text"
              allowClear
            />
          </Form.Item>
          <Form.Item name={"name"} label="Your Name">
            <Input placeholder="YOUR NAME (Optional)" />
          </Form.Item>
          <Form.Item
            name={"type"}
            label="TYPE OF VISA"
            rules={[
              { required: true, message: "Please input your TYPE OF VISA!" },
            ]}
          >
            <Select placeholder="VISA TYPE">
              <Select.Option value="WORKING">WORKING</Select.Option>
              <Select.Option value="STUDENT">STUDENT</Select.Option>
              <Select.Option value="TOURISM">TOURISM</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={"country"}
            label="SELECT COUNTRY"
            rules={[
              { required: true, message: "Please input your DESIRED COUNTRY" },
            ]}
          >
            <Select placeholder="COUNTRY">
              <Select.Option value="LITHUNIA">LITHUNIA</Select.Option>
              <Select.Option value="SERBIA">SERBIA</Select.Option>
              <Select.Option value="BELARUS">BELARUS</Select.Option>
              <Select.Option value="BULGARIA">BULGARIA</Select.Option>
              <Select.Option value="PORTUGAL">PORTUGAL</Select.Option>
              <Select.Option value="RUSSIA">RUSSIA</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Apply;
