
import React, { useState } from "react";
import SelectTickIcon from "../../svgs/components/selectDropdownIcons/SelectTickIcon";
import SearchIcon from "../../svgs/components/searchIcons/SearchIcon";
const DropDown = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("")
  const [searchResult, setSearchResult] = useState<string[]>([])
  let strArray = ["List1", "List2", "List12", "List3", "List4"];
    let handleChange = (e:string | any):void =>{
        const {value} = e.target;
        if(value.length === 0 ){
            setSelectedList([])
        }
        setSearchText(e.target.value)
        const filterResult = strArray.filter((item)=>
        item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
        setSearchResult(filterResult)
        // console.log("text ", searchText)
        // console.log("result data ", searchResult)
    }
  let handleSelectClick = (items: string): void => {
    let checkDuplicates = false;
    for (let i = 0; i < selectedList.length; i++) {
      if (items === selectedList[i]) {
        checkDuplicates = true;
        break;
      }
    }
    if (!checkDuplicates) {
      setSelectedList([...selectedList,items]);
    } else {
      setSelectedList((prev) => prev.filter((ele) => ele !== items));
    }
    setSearchResult([])
    setSearchText("")
  };
  console.log(selectedList);
  return (
    <div>
      {/*  Select Field */}
      <div className="select-dropdown-container">
        <div className="primary-search-container">
          <div className="primary-search-icon">
            <SearchIcon/>
          </div>
          <input
            onChange={handleChange}
            value={
                !searchText? (selectedList.length === 0
                ? ""
                : selectedList.length <= 2
                ? `${selectedList.join(", ")} `
                : `${selectedList[0]}, ${selectedList[1]}, +${
                    selectedList.length - 2
                  }more `):searchText
            }
            placeholder="Search by keyword"
            className="primary-search-tag"
            type="text"
          />
        </div>
        {
          <div className="dropdown-container">
            {
            searchResult.length !==0?
            searchResult.map((items, index) => {
                return (
                  <div
                    onClick={() => {
                      handleSelectClick(items);
                    }}
                    key={index}
                    className="list-container"
                  >
                    <p className="list-item">{items}</p>
                    <div className="list-icon">
                      {selectedList.filter((ele) => ele == items).length > 0 ? (
                        <SelectTickIcon/>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                );
              })
            :
            strArray.map((items, index) => {
              return (
                <div
                  onClick={() => {
                    handleSelectClick(items);
                  }}
                  key={index}
                  className="list-container"
                >
                  <p className="list-item">{items}</p>
                  <div className="list-icon">
                    {selectedList.filter((ele) => ele == items).length > 0 ? (
                      <SelectTickIcon />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};
export default DropDown;