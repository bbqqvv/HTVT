import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const ItemType = 'IMAGE';

const DraggableImage = ({ url, index, moveImage }) => {
  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.index !== index) {
        moveImage(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`w-24 h-24 relative ${isDragging ? 'opacity-50' : ''}`}
    >
      <img
        src={url}
        alt={`Preview ${index}`}
        className="w-full h-full object-contain border border-gray-300 rounded"
      />
    </div>
  );
};

const AddProduct = () => {
  const [activeEditor, setActiveEditor] = useState(null);
  const descriptionRef = useRef(null);
  const warrantyRef = useRef(null);
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [categories, setCategories] = useState([
    { value: "_shirts", label: "Áo sơ mi" },
    { value: "_polo_shirts", label: "Áo polo" },
    { value: "_t_shirts", label: "Áo phông" },
    { value: "_jackets", label: "Áo khoác" },
    { value: "_accessories", label: "Phụ kiện" },
    { value: "_trousers", label: "Quần" },
    { value: "_underwear", label: "Đồ lót" },
    { value: "_shoes", label: "Giày & Dép" }
  ]);
  const [newCategory, setNewCategory] = useState({ value: "", label: "" });
  const fileInputRef = useRef();
  const quillRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const url = reader.result;
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection();
      quill.insertEmbed(range.index, 'image', url);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      imageRatio: "1:1",
      productName: "",
      category: "",
      description: "",
      quality: "",
      price_origin: "",
      price_sale: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string()
        .max(120, "Tên sản phẩm không được vượt quá 120 ký tự")
        .required("Bắt buộc"),
      category: Yup.string().required("Bắt buộc"),
      description: Yup.string().max(3000, "Mô tả không được vượt quá 3000 ký tự"),
      quality: Yup.number().min(0, "Số lượng không thể âm").required("Bắt buộc"),
      price_origin: Yup.number().min(0, "Giá không thể âm").required("Bắt buộc"),
      price_sale: Yup.number().min(0, "Giá không thể âm").required("Bắt buộc"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 9) {
      const newImageUrls = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImageUrls]);
      if (coverImage === null && files.length > 0) {
        setCoverImage(newImageUrls[0]);
      }
    } else {
      alert("Bạn không thể thêm quá 9 hình ảnh.");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
    if (updatedImages[0] !== coverImage && updatedImages.length > 0) {
      setCoverImage(updatedImages[0]);
    }
  };

  const addCategory = () => {
    if (newCategory.value && newCategory.label) {
      setCategories((prevCategories) => [
        ...prevCategories,
        newCategory,
      ]);
      setNewCategory({ value: "", label: "" });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin danh mục.");
    }
  };

  const removeCategory = (value) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.value !== value)
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6">Thông tin cơ bản</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">* Hình ảnh sản phẩm</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="ratio1"
              name="imageRatio"
              value="1:1"
              checked={formik.values.imageRatio === "1:1"}
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="ratio1" className="mr-4">Hình ảnh tỷ lệ 1:1</label>
            <input
              type="radio"
              id="ratio2"
              name="imageRatio"
              value="3:4"
              checked={formik.values.imageRatio === "3:4"}
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="ratio2">Hình ảnh tỷ lệ 3:4</label>
            <a href="#viewExample" className="text-blue-500 ml-4">Xem ví dụ</a>
          </div>
          <div className="border-dashed border-2 border-gray-300 p-4 rounded flex items-center justify-center">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="text-blue-500 flex items-center"
              onClick={handleClick}
            >
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path>
                  <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0v-2.25H16.5a.75.75 0 010-1.5h2.25v-2.25z"></path>
                </svg>
              </div>
              Tải ảnh lên
            </button>
          </div>
          {images.length > 0 && (
            <div className="mt-4">
              <DndProvider backend={HTML5Backend}>
                <div className="flex flex-wrap gap-2">
                  {images.map((image, index) => (
                    <DraggableImage
                      key={index}
                      url={image}
                      index={index}
                      moveImage={moveImage}
                    />
                  ))}
                </div>
              </DndProvider>
            </div>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">* Tên sản phẩm</label>
          <input
            type="text"
            name="productName"
            className="border rounded py-2 px-3 w-full"
            {...formik.getFieldProps("productName")}
          />
          {formik.touched.productName && formik.errors.productName && (
            <div className="text-red-600 text-sm">{formik.errors.productName}</div>
          )}
        </div>




        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">* Danh mục sản phẩm</label>
          <div className="mt-4 flex space-x-2">
            <select
              name="category"
              className="border rounded py-2 px-3 w-full h-10"
              {...formik.getFieldProps("category")}
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-600 text-sm">{formik.errors.category}</div>
            )}
            <input
              type="text"
              value={newCategory.label}
              onChange={(e) => setNewCategory({ ...newCategory, label: e.target.value })}
              placeholder="Tên danh mục mới"
              className="border rounded py-2 px-3 w-full mb-2"
            />
            <input
              type="text"
              value={newCategory.value}
              onChange={(e) => setNewCategory({ ...newCategory, value: e.target.value })}
              placeholder="Giá trị danh mục mới"
              className="border rounded py-2 px-3 w-full mb-2"
            />
          </div>
          <div className="float-end space-x-2">
            <button
              type="button"
              onClick={addCategory}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Thêm danh mục
            </button>
            <button
              type="button"
              onClick={removeCategory}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Xóa danh mục
            </button>
          </div>
        </div>



        <div className="flex mt-14 justify-between">
          <div className="">
            <label htmlFor="price_origin" className="block text-gray-700 font-bold mb-2">Giá gốc:</label>
            <input
              id="price_origin"
              name="price_origin"
              type="number"
              min="0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price_origin || ''}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.price_origin && formik.errors.price_origin ? (
              <div className="text-red-500 text-xs mt-2">{formik.errors.price_origin}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="price_sale" className="block text-gray-700 font-bold mb-2">Giá giảm:</label>
            <input
              id="price_sale"
              name="price_sale"
              type="number"
              min="0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price_sale || ''}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.price_sale && formik.errors.price_sale ? (
              <div className="text-red-500 text-xs mt-2">{formik.errors.price_sale}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Kho:</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity || ''}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.price_sale && formik.errors.price_sale ? (
              <div className="text-red-500 text-xs mt-2">{formik.errors.quantity}</div>
            ) : null}
          </div>
        </div>



        <div className="mb-6 mt-9">
          {/* Mô tả sản phẩm */}
          <div>
            <button
              type="button"
              className="block text-gray-700 font-bold mb-2" onClick={() => setActiveEditor('description')}
            >
              * Mô tả sản phẩm <i className="text-[0.7rem] text-red-600">(Nhấp vào đây)</i>
            </button>
            {activeEditor === 'description' && (
              <ReactQuill
                ref={descriptionRef}
                value={formik.values.description}
                onChange={(content) => formik.setFieldValue('description', content)}
                modules={modules}
                formats={formats}
                placeholder="Nhập mô tả sản phẩm..."
              />
            )}
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-600 text-sm">{formik.errors.description}</div>
            )}
          </div>

          {/* Bảo hành */}
          <div className="mt-5">
            <button
              type="button"
              className="block text-gray-700 font-bold mb-2"
              onClick={() => setActiveEditor('warranty')}
            >
              * Bảo hành <i className="text-[0.7rem] text-red-600">(Nhấp vào đây)</i>
            </button>
            {activeEditor === 'warranty' && (
              <ReactQuill
                ref={warrantyRef}
                value={formik.values.warranty}
                onChange={(content) => formik.setFieldValue('warranty', content)}
                modules={modules}
                formats={formats}
                placeholder="Nhập thông tin bảo hành..."
              />
            )}
            {formik.touched.warranty && formik.errors.warranty && (
              <div className="text-red-600 text-sm">{formik.errors.warranty}</div>
            )}
          </div>
        </div>


        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Lưu sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    [{ align: [] }],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'list',
  'bullet',
  'link',
  'image',
  'align',
];
