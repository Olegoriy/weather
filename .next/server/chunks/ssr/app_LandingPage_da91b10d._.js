module.exports = {

"[project]/app/LandingPage/LandingPage.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "addCityCard": "LandingPage-module__HNGJjG__addCityCard",
  "citiesGrid": "LandingPage-module__HNGJjG__citiesGrid",
  "cityCard": "LandingPage-module__HNGJjG__cityCard",
  "cityCardWrapper": "LandingPage-module__HNGJjG__cityCardWrapper",
  "cityContent": "LandingPage-module__HNGJjG__cityContent",
  "container": "LandingPage-module__HNGJjG__container",
  "modal": "LandingPage-module__HNGJjG__modal",
  "modalAddButton": "LandingPage-module__HNGJjG__modalAddButton",
  "modalButtons": "LandingPage-module__HNGJjG__modalButtons",
  "modalCancelButton": "LandingPage-module__HNGJjG__modalCancelButton",
  "modalInput": "LandingPage-module__HNGJjG__modalInput",
  "modalOverlay": "LandingPage-module__HNGJjG__modalOverlay",
  "plusHorizontal": "LandingPage-module__HNGJjG__plusHorizontal",
  "plusIcon": "LandingPage-module__HNGJjG__plusIcon",
  "plusVertical": "LandingPage-module__HNGJjG__plusVertical",
  "removeButton": "LandingPage-module__HNGJjG__removeButton",
  "title": "LandingPage-module__HNGJjG__title",
});
}}),
"[project]/app/LandingPage/LaindingPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/LandingPage/LandingPage.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const LandingPage = ()=>{
    const initialCities = [
        "Санкт-Петербург",
        "Москва",
        "Коряжма",
        "Архангельск",
        "Калининград",
        "Челябинск",
        "Вологда",
        "Новосибирск",
        "Котлас"
    ];
    const [cities, setCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCity, setNewCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Загрузка городов из localStorage или установка initialCities
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedCities = localStorage.getItem("weatherCities");
        if (savedCities) {
            setCities(JSON.parse(savedCities));
        } else {
            setCities(initialCities);
        }
    }, []);
    // Сохранение городов в localStorage при их изменении
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cities.length > 0) {
            localStorage.setItem("weatherCities", JSON.stringify(cities));
        }
    }, [
        cities
    ]);
    // Удалён лишний useEffect, чтобы избежать бесконечного цикла
    const handleAddCity = ()=>{
        if (newCity.trim() && !cities.includes(newCity.trim())) {
            setCities([
                ...cities,
                newCity.trim()
            ]);
            setNewCity("");
            setShowModal(false);
        }
    };
    const removeCity = (cityToRemove)=>{
        setCities(cities.filter((city)=>city !== cityToRemove));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Выберите город"
            }, void 0, false, {
                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].citiesGrid,
                children: [
                    cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityCardWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/DisplayWeather?city=${encodeURIComponent(city)}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityCard,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: city
                                            }, void 0, false, {
                                                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Посмотреть погоду →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        removeCity(city);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeButton,
                                    title: "Удалить город",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, city, true, {
                            fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityCardWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowModal(true),
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addCityCard}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusIcon,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusHorizontal
                                            }, void 0, false, {
                                                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusVertical
                                            }, void 0, false, {
                                                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Добавить город"
                                    }, void 0, false, {
                                        fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Нажмите чтобы добавить новый"
                                    }, void 0, false, {
                                        fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Добавить новый город"
                        }, void 0, false, {
                            fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: newCity,
                            onChange: (e)=>setNewCity(e.target.value),
                            placeholder: "Введите название города",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalInput
                        }, void 0, false, {
                            fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalButtons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddCity,
                                    disabled: !newCity.trim(),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalAddButton,
                                    children: "Добавить"
                                }, void 0, false, {
                                    fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LandingPage$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCancelButton,
                                    children: "Отмена"
                                }, void 0, false, {
                                    fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/LandingPage/LaindingPage.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/LandingPage/LaindingPage.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LandingPage;
}}),

};

//# sourceMappingURL=app_LandingPage_da91b10d._.js.map