import React from "react";
import { Select } from "antd";
import "./styles.css";

const SelectCommon = ({ placeholder, defaultValue, options, onChange, className }) => {
  return (
    <>
      <div className="select_wrapp">
        <Select 
          showSearch
          allowClear
          defaultValue={defaultValue}
          onChange={onChange}
          className={`select ${className}`}
          placeholder={placeholder}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={options}
        />
      </div>
    </>
  );
};

export default SelectCommon;
