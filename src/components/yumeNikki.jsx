import React from "react";
import yumeNikkiLogo from "./yume_nikki.png";
import searchLogo from "./search.png";
import YumeList from "./yumeList";
import InputSearch from "./inputSearch";

const YumeNikki = () => {
    // const [yumeList, setYume] = React.useState([
    //     { id: 20190511, date: "2019/05/11", label: "キヨさんホラー" },
    //     { id: 20190521, date: "2019/05/21", label: "かんちゃんギター" },
    //     { id: 20190531, date: "2019/05/31", label: "anoco no oheya" },
    //     { id: 20190714, date: "2019/07/14", label: "女の子の焦り＠深夜" },
    //     { id: 20190721, date: "2019/07/21", label: "ベランダの愛の歌" },
    //     { id: 20190722, date: "2019/07/22", label: "ハムタロさんと一緒に" },
    //     { id: 20190723, date: "2019/07/23", label: "終業式の恐怖" },
    //     { id: 20190726, date: "2019/07/26", label: "馬の彼と" }
    // ]);
    const [searchVal, setSearch] = React.useState("");

    const yumeContents = [
        { id: 20190511, date: "2019/05/11", label: "キヨさんホラー" },
        { id: 20190521, date: "2019/05/21", label: "かんちゃんギター" },
        { id: 20190531, date: "2019/05/31", label: "anoco no oheya" },
        { id: 20190714, date: "2019/07/14", label: "女の子の焦り＠深夜" },
        { id: 20190721, date: "2019/07/21", label: "ベランダの愛の歌" },
        { id: 20190722, date: "2019/07/22", label: "ハムタロさんと一緒に" },
        { id: 20190723, date: "2019/07/23", label: "終業式の恐怖" },
        { id: 20190726, date: "2019/07/26", label: "馬の彼と" },
        { id: 20190803, date: "2019/08/03", label: "雨の日の闘い" },
        { id: 20190823, date: "2019/08/23", label: "真のボク" },
        { id: 20190907, date: "2019/09/07", label: "貧困の街" },
        { id: 20190929, date: "2019/09/29", label: "図工室にいるモノ" },
        { id: 20191011, date: "2019/10/11", label: "刺青" },
        { id: 20191012, date: "2019/10/12", label: "赤ん坊の泣き声" },
        { id: 20191119, date: "2019/11/19", label: "一番の恐怖" },
        { id: 20191212, date: "2019/12/12", label: "船着場の夜" },
        { id: 20200119, date: "2020/01/19", label: "隣に" },
        { id: 20200207, date: "2020/02/07", label: "ただのドライブ" },
        { id: 20200209, date: "2020/02/09", label: "目" },
        { id: 20200227, date: "2020/02/27", label: "ボーリング事件" },
        { id: 20200228, date: "2020/02/28", label: "つらい時" },
        { id: 20200305, date: "2020/03/05", label: "被検体" },
        { id: 20200306, date: "2020/03/06", label: "旅のお祭り" }
    ];

    const handleSearch = val => {
        setSearch(val);
    }

    const yumeDispContents = yumeContents.filter(yume => {
        if (searchVal !== "") {
            return ~yume.date.indexOf(searchVal) || ~yume.label.indexOf(searchVal);
        }
        return true;
    });

    return (
        <div className="yume_nikki_wapper">
            <img src={yumeNikkiLogo} alt="yume_nikki" />
            <div className="search_div">
                <img src={searchLogo} alt="search" className="search_img search" />
                <InputSearch onSearch={handleSearch} />
            </div>
            <div className="yume_contents mx-auto">
                {
                    yumeDispContents.map((content, index) => (
                        <YumeList
                            key={index}
                            content={content}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default YumeNikki;