import { Form, Divider, Input, InputNumber, Button } from "antd";
import "./index.css";

function UploadComponent() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        {/* form안에서 입력한 값들이 values안에 들어가게 하는 함수 */}
        <Form.Item //antd 라이브러리의 컴포넌트
          name="upload" //id값
          label={<div className="upload-label">상품 사진</div>} //form.item의 label속성에 값을 주면 자동으로 "label :" 이 들어가게 된다.
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" alt="" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider /> {/* 단순히 <hr>과 같이 구분선을 그어주는 용도*/}
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요." }]} //rulse 속성을 통해 required는 필수 항목 설정, message는 입력하지 않았을 시 나오는 문구 설정
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요." }]}
        >
          <InputNumber defaultValue={0} className="upload-price" size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개를 입력해주세요" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadComponent;
