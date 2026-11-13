'use strict';

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/outlined/index.ts
var outlined_exports = {};
__export(outlined_exports, {
  AddToKnowledgeBase: () => AddToKnowledgeBase_default,
  ApiApp: () => ApiApp_default,
  Application: () => Application_default,
  ApprovalSubmitted: () => ApprovalSubmitted_default,
  ApprovalTodo: () => ApprovalTodo_default,
  ArrowDown: () => ArrowDown_default,
  ArrowLeft: () => ArrowLeft_default,
  ArrowRight: () => ArrowRight_default,
  ArrowRightCircle: () => ArrowRightCircle_default,
  ArrowRightUp: () => ArrowRightUp_default,
  ArrowUp: () => ArrowUp_default,
  Attachment: () => Attachment_default,
  Attention: () => Attention_default,
  Bell: () => Bell_default,
  Binoculars: () => Binoculars_default,
  BlocksAndArrows: () => BlocksAndArrows_default,
  Book: () => Book_default,
  BookOpenText: () => BookOpenText_default,
  Books: () => Books_default,
  Bulb: () => Bulb_default,
  Calendar: () => Calendar_default,
  Check: () => Check_default,
  CheckCircle: () => CheckCircle_default,
  City: () => City_default,
  Clap: () => Clap_default,
  Close: () => Close_default,
  CloseCircle: () => CloseCircle_default,
  CollapseTextInput: () => CollapseTextInput_default,
  Copied: () => Copied_default,
  Copy: () => Copy_default,
  CornerDownLeft: () => CornerDownLeft_default,
  Dashboard: () => Dashboard_default,
  Delete: () => Delete_default,
  DeviceDesktopExchange: () => DeviceDesktopExchange_default,
  DoubleCheck: () => DoubleCheck_default,
  DoubleDown: () => DoubleDown_default,
  DoubleUp: () => DoubleUp_default,
  Down: () => Down_default,
  DownTriangle: () => DownTriangle_default,
  Download: () => Download_default,
  Drag: () => Drag_default,
  Earth: () => Earth_default,
  Edit: () => Edit_default,
  Exchange: () => Exchange_default,
  ExitFullScreen: () => ExitFullScreen_default,
  ExpandTextInput: () => ExpandTextInput_default,
  Eye: () => Eye_default,
  EyeClose: () => EyeClose_default,
  File: () => File_default,
  FileAddition: () => FileAddition_default,
  FileAudio: () => FileAudio_default,
  FileEditing: () => FileEditing_default,
  FileExcel: () => FileExcel_default,
  FileExport: () => FileExport_default,
  FileImage: () => FileImage_default,
  FilePdf: () => FilePdf_default,
  FileQuestion: () => FileQuestion_default,
  FileSaveAs: () => FileSaveAs_default,
  FileSearch: () => FileSearch_default,
  FileTxt: () => FileTxt_default,
  FileVideo: () => FileVideo_default,
  FileWord: () => FileWord_default,
  Filter: () => Filter_default,
  FolderClose: () => FolderClose_default,
  FolderOpen: () => FolderOpen_default,
  FontSize: () => FontSize_default,
  FullScreen: () => FullScreen_default,
  Hammer: () => Hammer_default,
  History: () => History_default,
  Home: () => Home_default,
  Info: () => Info_default,
  Layer: () => Layer_default,
  Left: () => Left_default,
  List: () => List_default,
  ListSuccess: () => ListSuccess_default,
  ListTree: () => ListTree_default,
  Loading: () => Loading_default,
  LogOut: () => LogOut_default,
  MessagePlus: () => MessagePlus_default,
  Microphone: () => Microphone_default,
  More: () => More_default,
  MoreCircle: () => MoreCircle_default,
  MoveToFolder: () => MoveToFolder_default,
  Newspaper: () => Newspaper_default,
  Notebook: () => Notebook_default,
  People: () => People_default,
  PeopleEdit: () => PeopleEdit_default,
  PeopleGroup: () => PeopleGroup_default,
  PeopleRound: () => PeopleRound_default,
  PeopleSafe: () => PeopleSafe_default,
  PictureInPicture: () => PictureInPicture_default,
  Pin: () => Pin_default,
  PinOff: () => PinOff_default,
  PlaySpeed: () => PlaySpeed_default,
  PlayerPause: () => PlayerPause_default,
  Plus: () => Plus_default,
  Question: () => Question_default,
  Refresh: () => Refresh_default,
  Research: () => Research_default,
  Return: () => Return_default,
  Right: () => Right_default,
  RightSidebar: () => RightSidebar_default,
  RightTriangle: () => RightTriangle_default,
  Round: () => Round_default,
  Rss: () => Rss_default,
  SafeRetrieval: () => SafeRetrieval_default,
  Seal: () => Seal_default,
  Search: () => Search_default,
  Send: () => Send_default,
  Setting: () => Setting_default,
  Share: () => Share_default,
  SidebarMenu: () => SidebarMenu_default,
  Skill: () => Skill_default,
  Sort: () => Sort_default,
  SortAmountDown: () => SortAmountDown_default,
  SortAmountUp: () => SortAmountUp_default,
  Square: () => Square_default,
  SquareSmall: () => SquareSmall_default,
  Tag: () => Tag_default,
  ThumbsDown: () => ThumbsDown_default,
  ThumbsUp: () => ThumbsUp_default,
  Time: () => Time_default,
  ToTop: () => ToTop_default,
  Translate: () => Translate_default,
  Up: () => Up_default,
  Upload: () => Upload_default,
  ViewGridCard: () => ViewGridCard_default,
  ViewOnNewTab: () => ViewOnNewTab_default,
  ViewOnOtherPage: () => ViewOnOtherPage_default,
  VolumeMute: () => VolumeMute_default,
  VolumeNotice: () => VolumeNotice_default,
  Write: () => Write_default
});
var AddToKnowledgeBase = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1.86084 19.8986C3.40212 19.0088 5.15049 18.5403 6.93021 18.5403C8.70993 18.5403 10.4583 19.0088 11.9996 19.8986C12.8872 19.3862 13.8435 19.0135 14.8348 18.7895", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1.86084 5.25372C3.40212 4.36386 5.15049 3.89539 6.93021 3.89539C8.70993 3.89539 10.4583 4.36386 11.9996 5.25372C13.5409 4.36386 15.2892 3.89539 17.069 3.89539C18.8487 3.89539 20.597 4.36386 22.1383 5.25372", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1.86084 5.25378V19.8986", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 5.25378V19.8986", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M22.1392 5.25378V12.0129", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.0046 13.8986L20.0046 19.8986", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.0046 16.8986H23.0046", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
AddToKnowledgeBase.displayName = "AddToKnowledgeBase";
var AddToKnowledgeBase_default = AddToKnowledgeBase;
var ApiApp = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 11.9686V5C9 3.34315 10.3432 2 12 2C13.6568 2 15 3.34315 15 5V6.00285", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 12.0017V19C15 20.6568 13.6568 22 12 22C10.3432 22 9 20.6568 9 19V17.985", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 15H4.99207C3.33959 15 2 13.6568 2 12C2 10.3432 3.33959 9 4.99207 9H5.9943", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 9H18.9944C20.6544 9 22 10.3432 22 12C22 13.6568 20.6544 15 18.9944 15H18.0331", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
ApiApp.displayName = "ApiApp";
var ApiApp_default = ApiApp;
var Application = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.5 9H3.5C2.94772 9 2.5 9.44772 2.5 10V20C2.5 20.5523 2.94772 21 3.5 21H20.5C21.0523 21 21.5 20.5523 21.5 20V10C21.5 9.44772 21.0523 9 20.5 9Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 6H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.5 3H16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 11C12.1322 11 12.2608 11.0522 12.3651 11.1449C12.4695 11.2377 12.5399 11.3639 12.5841 11.4952C12.6231 11.6119 12.6598 11.7287 12.6948 11.8454C13.0449 13.0124 13.9876 13.9551 15.1546 14.3052C15.2713 14.3402 15.3881 14.3769 15.5048 14.4159C15.6361 14.4601 15.7623 14.5305 15.8551 14.6349C15.9478 14.7392 16 14.8678 16 15C16 15.1322 15.9478 15.2608 15.8551 15.3651C15.7623 15.4695 15.6361 15.5399 15.5048 15.5841C15.3881 15.6231 15.2713 15.6598 15.1546 15.6948C13.987 16.0451 13.0451 16.987 12.6948 18.1546C12.6598 18.2713 12.6231 18.3881 12.5841 18.5048C12.5399 18.6361 12.4695 18.7623 12.3651 18.8551C12.2608 18.9478 12.1322 19 12 19C11.8678 19 11.7392 18.9478 11.6349 18.8551C11.5305 18.7623 11.4601 18.6361 11.4159 18.5048C11.3769 18.3881 11.3402 18.2713 11.3052 18.1546C10.9551 16.9876 10.0124 16.0449 8.84541 15.6948C8.72868 15.6598 8.61188 15.6231 8.49515 15.5841C8.36391 15.5399 8.2377 15.4695 8.14489 15.3651C8.05222 15.2608 8 15.1322 8 15C8 14.8678 8.05222 14.7392 8.14489 14.6349C8.2377 14.5305 8.36391 14.4601 8.49515 14.4159C8.61188 14.3769 8.72868 14.3402 8.84541 14.3052C10.0125 13.9551 10.9551 13.0125 11.3052 11.8454C11.3402 11.7287 11.3769 11.6119 11.4159 11.4952C11.4601 11.3639 11.5305 11.2377 11.6349 11.1449C11.7392 11.0522 11.8678 11 12 11Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14 11.5C13.918 11.5835 13.8394 11.6652 13.7815 11.7482C13.7235 11.8317 13.691 11.9144 13.691 12C13.691 12.0856 13.7235 12.1683 13.7815 12.2518C13.8394 12.3348 13.918 12.4165 14 12.5C14 12.5 14 12.5 14 12.5C14.0333 12.5333 14.0667 12.565 14.1 12.595C14.4 12.865 14.7 13 15 13C15.3 13 15.6 12.865 15.9 12.595C15.9333 12.565 15.9667 12.5333 16 12.5C16.082 12.4165 16.1606 12.3348 16.2185 12.2518C16.2765 12.1683 16.309 12.0856 16.309 12C16.309 11.9144 16.2765 11.8317 16.2185 11.7482C16.1606 11.6652 16.082 11.5835 16 11.5C15.9667 11.4667 15.9333 11.435 15.9 11.405C15.6 11.135 15.3 11 15 11C14.7 11 14.4 11.135 14.1 11.405C14.0667 11.435 14.0333 11.4667 14 11.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.5 11C15.4165 10.918 15.3348 10.8394 15.2518 10.7815C15.1683 10.7235 15.0856 10.691 15 10.691C14.9144 10.691 14.8317 10.7235 14.7482 10.7815C14.6652 10.8394 14.5835 10.918 14.5 11C14.5 11 14.5 11 14.5 11C14.4667 11.0333 14.435 11.0667 14.405 11.1C14.135 11.4 14 11.7 14 12C14 12.3 14.135 12.6 14.405 12.9C14.435 12.9333 14.4667 12.9667 14.5 13C14.5835 13.082 14.6652 13.1606 14.7482 13.2185C14.8317 13.2765 14.9144 13.309 15 13.309C15.0856 13.309 15.1683 13.2765 15.2518 13.2185C15.3348 13.1606 15.4165 13.082 15.5 13C15.5333 12.9667 15.565 12.9333 15.595 12.9C15.865 12.6 16 12.3 16 12C16 11.7 15.865 11.4 15.595 11.1C15.565 11.0667 15.5333 11.0333 15.5 11Z", fill: "currentColor" })
      ]
    }
  )
);
Application.displayName = "Application";
var Application_default = Application;
var ApprovalSubmitted = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 12.3704V8.5H2.5V20C2.5 20.5523 2.94771 21 3.5 21H12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 4.5C2.5 3.94771 2.94771 3.5 3.5 3.5H20.5C21.0523 3.5 21.5 3.94771 21.5 4.5V8.5H2.5V4.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 17H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 13H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.8408 16.4934L16.8408 13.5L13.8408 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8408 13.5V20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ApprovalSubmitted.displayName = "ApprovalSubmitted";
var ApprovalSubmitted_default = ApprovalSubmitted;
var ApprovalTodo = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 8.5V19.913C2.5 20.5134 2.94771 21 3.5 21H7.32342", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.75 3.5H3.5C2.94771 3.5 2.5 3.94771 2.5 4.5V8.5H21.5V4.5C21.5 3.94771 21.0523 3.5 20.5 3.5H16.25", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14 5.5H10C8.89543 5.5 8 4.60457 8 3.5C8 2.39543 8.89543 1.5 10 1.5H14C15.1046 1.5 16 2.39543 16 3.5C16 4.60457 15.1046 5.5 14 5.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 17H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 13H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8984 14.5884V16.5792L18.3463 17.4842", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8983 21C19.4398 21 21.5 18.9398 21.5 16.3983C21.5 13.8569 19.4398 11.7966 16.8983 11.7966C14.3569 11.7966 12.2966 13.8569 12.2966 16.3983C12.2966 18.9398 14.3569 21 16.8983 21Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ApprovalTodo.displayName = "ApprovalTodo";
var ApprovalTodo_default = ApprovalTodo;
var ArrowDown = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 21V3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 15L12 21L6 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ArrowDown.displayName = "ArrowDown";
var ArrowDown_default = ArrowDown;
var ArrowLeft = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 11.9958H18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 18L6 12L12 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ArrowLeft.displayName = "ArrowLeft";
var ArrowLeft_default = ArrowLeft;
var ArrowRight = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 12.0042H6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 6L18 12L12 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ArrowRight.displayName = "ArrowRight";
var ArrowRight_default = ArrowRight;
var ArrowRightCircle = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.24585 12.25H16.2458", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.7458 7.75L16.2458 12.25L11.7458 16.75", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ArrowRightCircle.displayName = "ArrowRightCircle";
var ArrowRightCircle_default = ArrowRightCircle;
var ArrowRightUp = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 16L16.5 7.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.5 7.5H16.5V16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ArrowRightUp.displayName = "ArrowRightUp";
var ArrowRightUp_default = ArrowRightUp;
var ArrowUp = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 3V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 9L12 3L18 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ArrowUp.displayName = "ArrowUp";
var ArrowUp_default = ArrowUp;
var Attachment = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.3608 3.50524L3.66627 12.1998C1.60832 14.2578 1.60832 17.5944 3.66627 19.6523C5.72421 21.7102 9.06082 21.7102 11.1188 19.6523L21.4695 9.30165C22.8414 7.92965 22.8414 5.70525 21.4695 4.33331C20.0975 2.96133 17.8731 2.96133 16.5011 4.33331L6.15041 14.684C5.46447 15.37 5.46447 16.4822 6.15041 17.1682C6.83641 17.8542 7.94861 17.8542 8.63461 17.1682L17.3292 8.47354", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Attachment.displayName = "Attachment";
var Attachment_default = Attachment;
var Attention = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 17.6995C12.6904 17.6995 13.25 17.1398 13.25 16.4495C13.25 15.7591 12.6904 15.1995 12 15.1995C11.3097 15.1995 10.75 15.7591 10.75 16.4495C10.75 17.1398 11.3097 17.6995 12 17.6995Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 6.30054L12 12.3005", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Attention.displayName = "Attention";
var Attention_default = Attention;
var Bell = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.26151 15.8579C3.13088 16.001 3.04467 16.1791 3.01337 16.3704C2.98207 16.5617 3.00703 16.7579 3.08522 16.9353C3.16341 17.1126 3.29145 17.2634 3.45377 17.3693C3.61609 17.4753 3.80569 17.5317 3.99951 17.5319H19.9995C20.1933 17.5319 20.383 17.4757 20.5454 17.37C20.7078 17.2642 20.836 17.1136 20.9144 16.9364C20.9928 16.7591 21.018 16.5629 20.987 16.3716C20.9559 16.1804 20.8699 16.0022 20.7395 15.8589C19.4095 14.4879 17.9995 13.0309 17.9995 8.53186C17.9995 6.94056 17.3674 5.41444 16.2422 4.28922C15.1169 3.164 13.5908 2.53186 11.9995 2.53186C10.4082 2.53186 8.88209 3.164 7.75687 4.28922C6.63165 5.41444 5.99951 6.94056 5.99951 8.53186C5.99951 13.0309 4.58851 14.4879 3.26151 15.8579Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.9363 18.5319C14.9363 18.9175 14.8603 19.2993 14.7128 19.6555C14.5652 20.0118 14.3489 20.3355 14.0763 20.6081C13.8036 20.8808 13.4799 21.0971 13.1237 21.2446C12.7674 21.3922 12.3856 21.4681 12 21.4681C11.6144 21.4681 11.2326 21.3922 10.8763 21.2446C10.5201 21.0971 10.1964 20.8808 9.92374 20.6081C9.65108 20.3355 9.43479 20.0118 9.28723 19.6555C9.13967 19.2993 9.06372 18.9175 9.06372 18.5319", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Bell.displayName = "Bell";
var Bell_default = Bell;
var Binoculars = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.07276 18.2582C1.87047 17.7698 1.76636 17.2464 1.76636 16.7178C1.76636 16.1892 1.87047 15.6658 2.07276 15.1774C2.27504 14.6891 2.57153 14.2453 2.9453 13.8716C3.31907 13.4978 3.7628 13.2013 4.25116 12.999C4.73951 12.7967 5.26293 12.6926 5.79152 12.6926C6.32012 12.6926 6.84353 12.7967 7.33189 12.999C7.82024 13.2013 8.26397 13.4978 8.63775 13.8716C9.01152 14.2453 9.30801 14.6891 9.51029 15.1774C9.71257 15.6658 9.81669 16.1892 9.81669 16.7178C9.81669 17.2464 9.71257 17.7698 9.51029 18.2582C9.30801 18.7465 9.01152 19.1902 8.63775 19.564C8.26397 19.9378 7.82024 20.2343 7.33189 20.4366C6.84353 20.6388 6.32012 20.743 5.79152 20.743C5.26293 20.743 4.73951 20.6388 4.25116 20.4366C3.7628 20.2343 3.31907 19.9378 2.9453 19.564C2.57153 19.1902 2.27504 18.7465 2.07276 18.2582Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.1833 16.7178C14.1833 17.7853 14.6074 18.8092 15.3623 19.564C16.1172 20.3189 17.141 20.743 18.2085 20.743C19.2761 20.743 20.2999 20.3189 21.0547 19.564C21.8096 18.8092 22.2337 17.7853 22.2337 16.7178C22.2337 15.6503 21.8096 14.6264 21.0547 13.8716C20.2999 13.1167 19.2761 12.6926 18.2085 12.6926C17.141 12.6926 16.1172 13.1167 15.3623 13.8716C14.6074 14.6264 14.1833 15.6503 14.1833 16.7178Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.913 15.126L18.1025 4.16945C17.8489 3.75352 17.3082 3.25708 16.1959 3.25708C15.085 3.25708 14.1833 3.85817 14.1833 4.5988V16.7186", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.08667 15.126L5.89716 4.16945C6.15075 3.75352 6.69146 3.25708 7.80375 3.25708C8.91469 3.25708 9.81633 3.85817 9.81633 4.5988V16.7186", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.1833 11.4682V8.22583H9.81665V11.4682V14.7106H14.1833V11.4682ZM14.1833 11.4682H9.91222", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Binoculars.displayName = "Binoculars";
var Binoculars_default = Binoculars;
var BlocksAndArrows = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 14H6C5.44772 14 5 14.4477 5 15V19C5 19.5523 5.44772 20 6 20H10C10.5523 20 11 19.5523 11 19V15C11 14.4477 10.5523 14 10 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 5H15C14.4477 5 14 5.44772 14 6V10C14 10.5523 14.4477 11 15 11H19C19.5523 11 20 10.5523 20 10V6C20 5.44772 19.5523 5 19 5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.5 14.5L14.5 19.5M19.5 14.5H14.5H19.5ZM19.5 14.5V19.5V14.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
BlocksAndArrows.displayName = "BlocksAndArrows";
var BlocksAndArrows_default = BlocksAndArrows;
var Book = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.5 18.5C3.5 14.6484 3.5 5.5 3.5 5.5C3.5 3.84315 4.84315 2.5 6.5 2.5H17.5V15.5C17.5 15.5 9.1163 15.5 6.5 15.5C4.85 15.5 3.5 16.8421 3.5 18.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.5 15.5C17.5 15.5 7.07685 15.5 6.5 15.5C4.84315 15.5 3.5 16.8432 3.5 18.5C3.5 20.1568 4.84315 21.5 6.5 21.5C7.60455 21.5 12.9379 21.5 20.5 21.5V3.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 18.5H17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Book.displayName = "Book";
var Book_default = Book;
var BookOpenText = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4H3.5C2.67157 4 2 4.67157 2 5.5V17.5C2 18.3284 2.67157 19 3.5 19H9C9.79565 19 10.5587 19.3161 11.1213 19.8787C11.6839 20.4413 12 21.2044 12 22M12 8V22M12 8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4H20.5C21.3284 4 22 4.67157 22 5.5V17.5C22 18.3284 21.3284 19 20.5 19H15C14.2044 19 13.4413 19.3161 12.8787 19.8787C12.3161 20.4413 12 21.2044 12 22M6 9H8M6 13H8M16 9H18M16 13H18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
BookOpenText.displayName = "BookOpenText";
var BookOpenText_default = BookOpenText;
var Books = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.19043 4.28946C3.19043 3.99733 3.30648 3.71717 3.51304 3.5106C3.71961 3.30404 3.99977 3.18799 4.2919 3.18799H6.49485C6.78697 3.18799 7.06714 3.30404 7.2737 3.5106C7.48027 3.71717 7.59632 3.99733 7.59632 4.28946V19.7101C7.59632 20.0022 7.48027 20.2824 7.2737 20.4889C7.06714 20.6955 6.78697 20.8115 6.49485 20.8115H4.2919C3.99977 20.8115 3.71961 20.6955 3.51304 20.4889C3.30648 20.2824 3.19043 20.0022 3.19043 19.7101V4.28946Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.59521 4.28946C7.59521 3.99733 7.71126 3.71717 7.91783 3.5106C8.12439 3.30404 8.40456 3.18799 8.69669 3.18799H10.8996C11.1918 3.18799 11.4719 3.30404 11.6785 3.5106C11.8851 3.71717 12.0011 3.99733 12.0011 4.28946V19.7101C12.0011 20.0022 11.8851 20.2824 11.6785 20.4889C11.4719 20.6955 11.1918 20.8115 10.8996 20.8115H8.69669C8.40456 20.8115 8.12439 20.6955 7.91783 20.4889C7.71126 20.2824 7.59521 20.0022 7.59521 19.7101V4.28946Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.19043 7.59534H7.59632", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.59521 16.4053H12.0011", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.8851 3.8054L15.2907 3.22162C15.9097 3.07292 16.5387 3.4309 16.7028 4.02789L20.7727 18.8074C20.8445 19.078 20.8127 19.3657 20.6836 19.614C20.5544 19.8624 20.3372 20.0536 20.0744 20.1501L19.9279 20.1953L17.5223 20.7791C16.9033 20.9278 16.2743 20.5698 16.1102 19.9728L12.0403 5.19325C11.9685 4.92268 12.0003 4.63504 12.1294 4.38668C12.2586 4.13832 12.4758 3.94713 12.7386 3.85056L12.8851 3.8054Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.1035 8.69681L17.5094 7.59534", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.3091 16.4066L19.6302 15.3271", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Books.displayName = "Books";
var Books_default = Books;
var Bulb = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.00024 10.9998H3.11133M12 1V2.11109M20.8887 10.9998H21.9998M4.88907 3.88882L5.66683 4.66659M19.111 3.88882L18.3332 4.66659", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.69728 12.6572C7.04494 13.7701 7.73396 14.7455 8.66675 15.4451C9.10056 15.8745 9.42718 16.4 9.62021 16.9791C9.81323 17.5582 9.86723 18.1745 9.77784 18.7783C9.77784 19.3677 10.012 19.9329 10.4287 20.3497C10.8454 20.7664 11.4107 21.0005 12 21.0005C12.5894 21.0005 13.1546 20.7664 13.5713 20.3497C13.9881 19.9329 14.2222 19.3677 14.2222 18.7783C14.1328 18.1745 14.1868 17.5582 14.3798 16.9791C14.5728 16.4 14.8995 15.8745 15.3333 15.4451C16.2661 14.7455 16.9551 13.7701 17.3027 12.6572C17.6504 11.5442 17.6391 10.3501 17.2704 9.24396C16.9016 8.13781 16.1942 7.17571 15.2483 6.49394C14.3024 5.81218 13.166 5.44531 12 5.44531C10.834 5.44531 9.69759 5.81218 8.75169 6.49394C7.8058 7.17571 7.09838 8.13781 6.72967 9.24396C6.36095 10.3501 6.34962 11.5442 6.69728 12.6572Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.44434 16.5547H14.5553", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Bulb.displayName = "Bulb";
var Bulb_default = Bulb;
var Calendar = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 9.5H21.5V20C21.5 20.5523 21.0523 21 20.5 21H3.5C2.94771 21 2.5 20.5523 2.5 20V9.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 4.5C2.5 3.94771 2.94771 3.5 3.5 3.5H20.5C21.0523 3.5 21.5 3.94771 21.5 4.5V9.5H2.5V4.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14 17H17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 17H10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14 13H17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 13H10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Calendar.displayName = "Calendar";
var Calendar_default = Calendar;
var Check = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 5.5L8.4375 18.5L2.5 12.5909", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Check.displayName = "Check";
var Check_default = Check;
var CheckCircle = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.5 12.2L10.5 15.2L16.5 9.19995", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
CheckCircle.displayName = "CheckCircle";
var CheckCircle_default = CheckCircle;
var City = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 21H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 13H5C4.44772 13 4 13.4477 4 14V20C4 20.5523 4.44772 21 5 21H7C7.55228 21 8 20.5523 8 20V14C8 13.4477 7.55228 13 7 13Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 17L8 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 2H9C8.44772 2 8 2.44772 8 3V20C8 20.5523 8.44772 21 9 21H19C19.5523 21 20 20.5523 20 20V3C20 2.44772 19.5523 2 19 2Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 5H11V7H13V5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 5H15V7H17V5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 8.5H11V10.5H13V8.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 8.5H15V10.5H17V8.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 12H15V14H17V12Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 15.5H15V17.5H17V15.5Z", fill: "currentColor" })
      ]
    }
  )
);
City.displayName = "City";
var City_default = City;
var Clap = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#clip0_330179_1423)", children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.0184 10.602L10.9078 6.49143C10.6563 6.23984 10.5149 5.89862 10.5149 5.54283C10.5149 5.18704 10.6563 4.84581 10.9078 4.59423C11.1594 4.34265 11.5007 4.20131 11.8564 4.20131C12.2122 4.20131 12.5535 4.34265 12.805 4.59423L16.006 7.79519", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.1889 19.4985C19.8065 18.6965 21.4288 17.0916 21.9246 15.4376C22.1798 14.5864 22.2196 13.6851 22.0404 12.8147C22.0188 12.71 21.9969 12.6055 21.9747 12.501C21.8691 12.0008 21.3543 10.101 20.4303 6.80053C20.3362 6.46408 20.1144 6.17765 19.8123 6.00215C19.5102 5.82665 19.1516 5.77593 18.8127 5.86079C18.4516 5.95106 18.131 6.1594 17.9018 6.45272C17.6727 6.74603 17.5481 7.10751 17.5479 7.47973", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.3173 10.9846L10.5743 6.24157C10.3227 5.98998 9.98153 5.84865 9.62573 5.84865C9.26994 5.84865 8.92872 5.98998 8.67713 6.24157C8.42555 6.49315 8.28421 6.83437 8.28421 7.19017C8.28421 7.54596 8.42555 7.88718 8.67713 8.13877L12.7877 12.2494", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.67702 8.13918L7.41222 6.87438C7.28765 6.74981 7.13976 6.65099 6.977 6.58358C6.81424 6.51616 6.63979 6.48146 6.46362 6.48146C6.28745 6.48146 6.11301 6.51616 5.95024 6.58358C5.78748 6.65099 5.6396 6.74981 5.51502 6.87438C5.39045 6.99895 5.29164 7.14684 5.22422 7.3096C5.1568 7.47236 5.1221 7.64681 5.1221 7.82298C5.1221 7.99915 5.1568 8.1736 5.22422 8.33636C5.29164 8.49912 5.39045 8.64701 5.51502 8.77158L10.8904 14.147", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.7799 10.0345C6.52831 9.78295 6.18709 9.64161 5.8313 9.64161C5.4755 9.64161 5.13428 9.78295 4.8827 10.0345C4.63111 10.2861 4.48978 10.6273 4.48978 10.9831C4.48978 11.3389 4.63111 11.6802 4.8827 11.9317L8.9933 16.0423", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.14757 13.1991C5.89599 12.9475 5.55477 12.8062 5.19897 12.8062C4.84318 12.8062 4.50196 12.9475 4.25037 13.1991C3.99879 13.4507 3.85745 13.7919 3.85745 14.1477C3.85745 14.5035 3.99879 14.8447 4.25037 15.0963L9.62577 20.4717C10.6321 21.478 11.997 22.0434 13.4202 22.0434C14.8433 22.0434 16.2082 21.478 17.2146 20.4717L18.4794 19.2069L18.3478 19.3384C18.9763 18.7101 19.4389 17.9356 19.6941 17.0843C19.9493 16.2331 19.9891 15.3318 19.8099 14.4614C19.7883 14.3567 19.7664 14.2522 19.7442 14.1477C19.6386 13.6475 19.1238 11.7477 18.1998 8.44724C18.1057 8.11079 17.884 7.82435 17.5818 7.64885C17.2797 7.47335 16.9211 7.42264 16.5822 7.50749C16.2211 7.59776 15.9005 7.8061 15.6713 8.09942C15.4422 8.39274 15.3176 8.75421 15.3174 9.12643L15.3174 10.9857", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.30176 18.2402V20.2402", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.30176 19.2402H2.30176", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.66943 2.64648V4.64648", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.66943 3.64648H1.66943", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.6509 1.64648V3.64648", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.6509 2.64648H15.6509", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "clip0_330179_1423", children: /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "24", height: "24", fill: "currentColor" }) }) })
      ]
    }
  )
);
Clap.displayName = "Clap";
var Clap_default = Clap;
var Close = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 4L20 20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 20L20 4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Close.displayName = "Close";
var Close_default = Close;
var CloseCircle = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.8282 9.17163L9.17139 14.8285", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.17163 9.17163L14.8285 14.8285", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
CloseCircle.displayName = "CloseCircle";
var CloseCircle_default = CloseCircle;
var CollapseTextInput = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M22 10H14V2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 14H10V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
CollapseTextInput.displayName = "CollapseTextInput";
var CollapseTextInput_default = CollapseTextInput;
var Copied = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 1.71429, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.50024 6.2158V3.90625C6.50024 3.1296 7.12984 2.5 7.90649 2.5H20.094C20.8706 2.5 21.5002 3.1296 21.5002 3.90625V16.0938C21.5002 16.8704 20.8706 17.5 20.094 17.5H17.7584", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.0935 6.5H3.90601C3.12936 6.5 2.49976 7.1296 2.49976 7.90625V20.0938C2.49976 20.8704 3.12936 21.5 3.90601 21.5H16.0935C16.8702 21.5 17.4998 20.8704 17.4998 20.0938V7.90625C17.4998 7.1296 16.8702 6.5 16.0935 6.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.49878 14.4244L8.92315 16.8487L13.7719 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Copied.displayName = "Copied";
var Copied_default = Copied;
var Copy = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
Copy.displayName = "Copy";
var Copy_default = Copy;
var CornerDownLeft = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 9L4 13L8 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 5V11.5C20 12.3285 19.3285 13 18.5 13H4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
CornerDownLeft.displayName = "CornerDownLeft";
var CornerDownLeft_default = CornerDownLeft;
var Dashboard = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.9985 10.9781C14.9985 10.9781 13.4608 15.3126 12.73 16.0693C11.9993 16.826 10.7934 16.8471 10.0367 16.1163C9.27995 15.3855 9.25891 14.1797 9.98967 13.423C10.7204 12.6662 14.9985 10.9781 14.9985 10.9781Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.071 20.5355C20.8807 18.7259 22 16.2259 22 13.4645C22 7.94162 17.5229 3.46448 12 3.46448C6.47714 3.46448 2 7.94162 2 13.4645C2 16.2259 3.11929 18.7259 4.92893 20.5355", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 3.94067V5.84544", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.0692 7.34167L17.5889 8.54034", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.8203 15.0039L18.9644 14.5754", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.17969 15.0039L5.03563 14.5754", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.93091 7.34167L6.41118 8.54039", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Dashboard.displayName = "Dashboard";
var Dashboard_default = Dashboard;
var Delete = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.5 6L8.1 2.5H15.9L16.5 6", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 6H21", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5 6L17.5 21.5H6.5L5.5 6H18.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.5 17.5H14.5", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
Delete.displayName = "Delete";
var Delete_default = Delete;
var DeviceDesktopExchange = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 20H12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 16V20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 12V8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 12V11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 12V10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 12V11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 15H15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 15L19.5 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 18H21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 18L17 20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
DeviceDesktopExchange.displayName = "DeviceDesktopExchange";
var DeviceDesktopExchange_default = DeviceDesktopExchange;
var DoubleCheck = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2.2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.1 5.67578L7 17.7758L1.5 12.2758", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M22.5001 10.0742L14.2501 18.3242L12.6001 16.6742", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
DoubleCheck.displayName = "DoubleCheck";
var DoubleCheck_default = DoubleCheck;
var DoubleDown = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 6L12 12L6 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 12L12 18L6 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
DoubleDown.displayName = "DoubleDown";
var DoubleDown_default = DoubleDown;
var DoubleUp = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 12L12 6L18 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 18L12 12L18 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
DoubleUp.displayName = "DoubleUp";
var DoubleUp_default = DoubleUp;
var Down = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.5 9L12.5 15L6.5 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Down.displayName = "Down";
var Down_default = Down;
var DownTriangle = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 9.5L12 15.5L6 9.5H18Z", stroke: "currentColor", strokeLinejoin: "round" })
    }
  )
);
DownTriangle.displayName = "DownTriangle";
var DownTriangle_default = DownTriangle;
var Download = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 10L12 15L7 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 15L12 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 14L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Download.displayName = "Download";
var Download_default = Download;
var Drag = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 5C9.5 6.10455 8.60455 7 7.5 7C6.39545 7 5.5 6.10455 5.5 5C5.5 3.89543 6.39545 3 7.5 3C8.60455 3 9.5 3.89543 9.5 5ZM7.5 14C8.60455 14 9.5 13.1046 9.5 12C9.5 10.8955 8.60455 10 7.5 10C6.39545 10 5.5 10.8955 5.5 12C5.5 13.1046 6.39545 14 7.5 14ZM7.5 21C8.60455 21 9.5 20.1045 9.5 19C9.5 17.8954 8.60455 17 7.5 17C6.39545 17 5.5 17.8954 5.5 19C5.5 20.1045 6.39545 21 7.5 21Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5 5C18.5 6.10455 17.6045 7 16.5 7C15.3954 7 14.5 6.10455 14.5 5C14.5 3.89543 15.3954 3 16.5 3C17.6045 3 18.5 3.89543 18.5 5ZM16.5 14C17.6045 14 18.5 13.1046 18.5 12C18.5 10.8955 17.6045 10 16.5 10C15.3954 10 14.5 10.8955 14.5 12C14.5 13.1046 15.3954 14 16.5 14ZM16.5 21C17.6045 21 18.5 20.1045 18.5 19C18.5 17.8954 17.6045 17 16.5 17C15.3954 17 14.5 17.8954 14.5 19C14.5 20.1045 15.3954 21 16.5 21Z", fill: "currentColor" })
      ]
    }
  )
);
Drag.displayName = "Drag";
var Drag_default = Drag;
var Earth = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C14.2092 22 16 17.5229 16 12C16 6.47715 14.2092 2 12 2C9.79085 2 8 6.47715 8 12C8 17.5229 9.79085 22 12 22Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.66968 9H21.3303", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.66968 15H21.3303", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Earth.displayName = "Earth";
var Earth_default = Earth;
var Edit = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.5 21H21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
Edit.displayName = "Edit";
var Edit_default = Edit;
var Exchange = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.12598 10.0437H17.8688", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.12598 13.9578H17.8688", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.8704 10.0423L13.3037 5.47559", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.6926 18.5244L6.12598 13.9578", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Exchange.displayName = "Exchange";
var Exchange_default = Exchange;
var ExitFullScreen = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.0166 19.0166C21.0166 20.1212 20.1212 21.0166 19.0166 21.0166H4.9834C3.87883 21.0166 2.9834 20.1212 2.9834 19.0166V4.9834C2.9834 3.87883 3.87883 2.9834 4.9834 2.9834H19.0166C20.1212 2.9834 21.0166 3.87883 21.0166 4.9834V19.0166Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5 5.5V10.5H18.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 18.5V13.5H5.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ExitFullScreen.displayName = "ExitFullScreen";
var ExitFullScreen_default = ExitFullScreen;
var ExpandTextInput = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 21H3V13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 3H21V11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ExpandTextInput.displayName = "ExpandTextInput";
var ExpandTextInput_default = ExpandTextInput;
var Eye = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#clip0_330570_388)", children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.83398 11.9999C9.83398 12.5744 10.0622 13.1253 10.4684 13.5315C10.8746 13.9377 11.4255 14.1659 11.9999 14.1659C12.5744 14.1659 13.1253 13.9377 13.5315 13.5315C13.9377 13.1253 14.1659 12.5744 14.1659 11.9999C14.1659 11.4255 13.9377 10.8746 13.5315 10.4684C13.1253 10.0622 12.5744 9.83398 11.9999 9.83398C11.4255 9.83398 10.8746 10.0622 10.4684 10.4684C10.0622 10.8746 9.83398 11.4255 9.83398 11.9999Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M22.4619 11.9749C19.6619 16.6415 16.1619 18.9749 11.9619 18.9749C7.76191 18.9749 4.26191 16.6415 1.46191 11.9749C4.26191 7.30819 7.76191 4.97485 11.9619 4.97485C16.1619 4.97485 19.6619 7.30819 22.4619 11.9749Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "clip0_330570_388", children: /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "24", height: "24", fill: "currentColor" }) }) })
      ]
    }
  )
);
Eye.displayName = "Eye";
var Eye_default = Eye;
var EyeClose = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#clip0_330570_395)", children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.4676 10.4697C10.0615 10.876 9.83339 11.427 9.8335 12.0014C9.8336 12.5759 10.0619 13.1268 10.4682 13.5329C10.8744 13.939 11.4254 14.1671 11.9999 14.167C12.5743 14.1669 13.1252 13.9386 13.5313 13.5324", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.4233 17.4265C15.7868 18.4504 13.8926 18.9874 11.9622 18.9746C7.76229 18.9746 4.26235 16.6413 1.4624 11.9748C2.94638 9.50147 4.62634 7.68384 6.50231 6.52186M9.83892 5.18488C10.5378 5.04341 11.2492 4.97305 11.9622 4.97489C16.1621 4.97489 19.6621 7.30818 22.462 11.9748C21.685 13.2697 20.8532 14.3862 19.9677 15.323", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 3L21 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "clip0_330570_395", children: /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "24", height: "24", fill: "currentColor" }) }) })
      ]
    }
  )
);
EyeClose.displayName = "EyeClose";
var EyeClose_default = EyeClose;
var File = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 13H16M8 17H11.5M7.2 2H14.0748C14.5996 2 14.862 2 15.1068 2.06287C15.3237 2.11858 15.5298 2.21035 15.7163 2.33433C15.9268 2.47422 16.1023 2.66925 16.4534 3.05931L19.1785 6.08727C19.4823 6.42483 19.6343 6.59361 19.7426 6.78594C19.8387 6.95651 19.9092 7.14026 19.9519 7.33132C20 7.54674 20 7.77381 20 8.22795V18.8C20 19.9201 20 20.4802 19.782 20.908C19.5903 21.2843 19.2843 21.5903 18.908 21.782C18.4802 22 17.9201 22 16.8 22H7.2C6.07989 22 5.51984 22 5.09202 21.782C4.71569 21.5903 4.40973 21.2843 4.21799 20.908C4 20.4802 4 19.9201 4 18.8V5.2C4 4.07989 4 3.51984 4.21799 3.09202C4.40973 2.71569 4.71569 2.40973 5.09202 2.21799C5.51984 2 6.07989 2 7.2 2Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
File.displayName = "File";
var File_default = File;
var FileAddition = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 11.5V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.5 14.5V21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 18H16.5H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 2V7H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileAddition.displayName = "FileAddition";
var FileAddition_default = FileAddition;
var FileAudio = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.1737 9.83057L12.9333 10.9391V16.3649", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.8798 18.4186C12.014 18.4186 12.9335 17.4991 12.9335 16.3649C12.9335 15.2307 12.014 14.3113 10.8798 14.3113C9.74563 14.3113 8.82617 15.2307 8.82617 16.3649C8.82617 17.4991 9.74563 18.4186 10.8798 18.4186Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileAudio.displayName = "FileAudio";
var FileAudio_default = FileAudio;
var FileEditing = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.0714 18L15.5 13.5714L12.9286 11L8.5 15.4286V18H11.0714Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileEditing.displayName = "FileEditing";
var FileEditing_default = FileEditing;
var FileExcel = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.99993 13L10.2856 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.7143 13L16 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.99993 17L10.2856 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.7143 17L16 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileExcel.displayName = "FileExcel";
var FileExcel_default = FileExcel;
var FileExport = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 11.5V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.5 16.5L21 19L18.5 21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 19H13V15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 2V7H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileExport.displayName = "FileExport";
var FileExport_default = FileExport;
var FileImage = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.5 14C10.6046 14 11.5 13.1046 11.5 12C11.5 10.8954 10.6046 10 9.5 10C8.39543 10 7.5 10.8954 7.5 12C7.5 13.1046 8.39543 14 9.5 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 20L15.6087 13L13 19L9.30435 17.0909L6 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileImage.displayName = "FileImage";
var FileImage_default = FileImage;
var FilePdf = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 11H13.5C14.0523 11 14.5 11.4477 14.5 12V13.9975C14.5 14.5496 14.0527 14.9972 13.5006 14.9975L10.5032 14.9994C9.95103 14.9997 9.50307 14.5524 9.50259 14.0002L9.5 11Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.5 14.5V17", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
FilePdf.displayName = "FilePdf";
var FilePdf_default = FilePdf;
var FileQuestion = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 15.5V14C13.1046 14 14 12.9927 14 11.75C14 10.5073 13.1046 9.5 12 9.5C10.8954 9.5 10 10.5073 10 11.75", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 19.5C12.6904 19.5 13.25 18.9404 13.25 18.25C13.25 17.5597 12.6904 17 12 17C11.3097 17 10.75 17.5597 10.75 18.25C10.75 18.9404 11.3097 19.5 12 19.5Z", fill: "currentColor" })
      ]
    }
  )
);
FileQuestion.displayName = "FileQuestion";
var FileQuestion_default = FileQuestion;
var FileSaveAs = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.4011 15.9758L11.9998 18.3772L9.59839 15.9758", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.9998 18.3772V11.1731", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileSaveAs.displayName = "FileSaveAs";
var FileSaveAs_default = FileSaveAs;
var FileSearch = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 16C12.6569 16 14 14.6569 14 13C14 11.3431 12.6569 10 11 10C9.34315 10 8 11.3431 8 13C8 14.6569 9.34315 16 11 16Z", stroke: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5 15L16 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileSearch.displayName = "FileSearch";
var FileSearch_default = FileSearch;
var FileTxt = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 11H15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 11.5V17", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
FileTxt.displayName = "FileTxt";
var FileTxt_default = FileTxt;
var FileVideo = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.4617 16.5747V14.2367L12.4865 15.4057L14.5112 16.5747L12.4865 17.7437L10.4617 18.9127V16.5747Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 10.9854L20 10.9854", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 7.42749L20 7.42749", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 7.42749L14 10.4275", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 7.42749L8 10.4275", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileVideo.displayName = "FileVideo";
var FileVideo_default = FileVideo;
var FileWord = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 11L9.99585 17L12 12.0273L13.9241 17L16 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FileWord.displayName = "FileWord";
var FileWord_default = FileWord;
var Filter = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 4.5L10.2 12.9089V19.2222L13.8 21V12.9089L21 4.5H3Z", stroke: "currentColor", strokeLinejoin: "round" })
    }
  )
);
Filter.displayName = "Filter";
var Filter_default = Filter;
var FolderClose = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 5C2.5 3.89543 3.39543 3 4.5 3H8.56325C9.15681 3 9.71971 3.26365 10.0997 3.71963L11.4003 5.28037C11.7803 5.73635 12.3402 6 12.9337 6C14.4505 6 17.4829 6 19.5024 6C20.607 6 21.5 6.89373 21.5 7.9983C21.5 10.9288 21.5 16.1514 21.5 19.0044C21.5 20.109 20.612 21 19.5075 21C15.8576 21 8.14081 21 4.49185 21C3.38728 21 2.5 20.1046 2.5 19V5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 11H2.5", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
FolderClose.displayName = "FolderClose";
var FolderClose_default = FolderClose;
var FolderOpen = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 20.5L4.12127 12.0149C4.34385 11.1246 5.14382 10.5 6.06155 10.5H19.75C19.75 10.2533 19.75 9.37248 19.75 8.5C19.75 7.39543 18.8546 6.5 17.75 6.5H12.9367C12.3432 6.5 11.7803 6.23635 11.4003 5.78037L10.0997 4.21963C9.71971 3.76365 9.15681 3.5 8.56325 3.5H4C2.89543 3.5 2 4.39151 2 5.49608C2 9.70711 2 19.2193 2 20.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.1802 20.5C19.6569 20.5 20.0673 20.1635 20.1608 19.6961L21.7608 11.6961C21.8845 11.0773 21.4112 10.5 20.7802 10.5H5.19417C4.732 10.5 4.33004 10.8167 4.22192 11.2661L2 20.5H19.1802Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FolderOpen.displayName = "FolderOpen";
var FolderOpen_default = FolderOpen;
var FontSize = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.4426 19.6093L15.5801 10.5432C15.6659 10.2951 15.8269 10.08 16.0406 9.92771C16.2544 9.77543 16.5103 9.6936 16.7728 9.6936C17.0352 9.6936 17.2912 9.77543 17.5049 9.92771C17.7187 10.08 17.8797 10.2951 17.9654 10.5432L21.1029 19.6093", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.3049 17.135H20.2406", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.89722 19.2369L9.08397 4.8474C9.14215 4.71213 9.24031 4.59657 9.36611 4.51528C9.49191 4.434 9.6397 4.39062 9.79088 4.39062C9.94206 4.39062 10.0899 4.434 10.2156 4.51528C10.3414 4.59657 10.4396 4.71213 10.4978 4.8474L12.8089 10.2241", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.01831 14.9968H10.3215", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FontSize.displayName = "FontSize";
var FontSize_default = FontSize;
var FullScreen = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.0166 19.0166C21.0166 20.1212 20.1212 21.0166 19.0166 21.0166H4.9834C3.87883 21.0166 2.9834 20.1212 2.9834 19.0166V4.9834C2.9834 3.87883 3.87883 2.9834 4.9834 2.9834H19.0166C20.1212 2.9834 21.0166 3.87883 21.0166 4.9834V19.0166Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.5 11.5V6.5H12.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.5 12.5V17.5H11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
FullScreen.displayName = "FullScreen";
var FullScreen_default = FullScreen;
var Hammer = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.0002 12L6.62718 20.373C6.22935 20.7708 5.68979 20.9943 5.12718 20.9943C4.56457 20.9943 4.025 20.7708 3.62718 20.373C3.22936 19.9752 3.00586 19.4356 3.00586 18.873C3.00586 18.3104 3.22936 17.7708 3.62718 17.373L12.0002 9M18 15L22 11M21.5 11.5L19.586 9.58596C19.2109 9.21098 19.0001 8.70235 19 8.17196V6.99996L16.74 4.73996C15.6245 3.62515 14.115 2.99432 12.538 2.98396L9 2.95996L9.92 3.77996C10.5735 4.35935 11.0967 5.07066 11.4552 5.867C11.8137 6.66335 11.9994 7.52663 12 8.39996V9.99996L14 12H15.172C15.7024 12.0001 16.211 12.2109 16.586 12.586L18.5 14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Hammer.displayName = "Hammer";
var Hammer_default = Hammer;
var History = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.90918 3.36365V7H6.54556", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C8.299 2 5.06755 4.01056 3.33839 6.99905", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.0026 6L12.002 12.0044L16.2417 16.2441", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
History.displayName = "History";
var History_default = History;
var Home = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.08322 21.4999V8.83332L1.44434 10.9444L11.9999 2.5L22.5554 10.9444L19.9165 8.83332V21.4999H4.08322Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.36108 14.6389V21.5H14.6388V14.6389H9.36108Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.08325 21.5H19.9165", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
Home.displayName = "Home";
var Home_default = Home;
var Info = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.5C12.6904 5.5 13.25 6.05965 13.25 6.75C13.25 7.44035 12.6904 8 12 8C11.3097 8 10.75 7.44035 10.75 6.75C10.75 6.05965 11.3097 5.5 12 5.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.25 17V10H11.75H11.25", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 17H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Info.displayName = "Info";
var Info_default = Info;
var Layer = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 5.95715L12 9.5L22 5.95715L12 2.5L2 5.95715Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 12L12 15.5L22 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 18L12 21.5L22 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Layer.displayName = "Layer";
var Layer_default = Layer;
var Left = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.5 18L9.5 12L15.5 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Left.displayName = "Left";
var Left_default = Left;
var List = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 14C5.10455 14 6 13.1046 6 12C6 10.8954 5.10455 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 6C4.55229 6 5 5.5523 5 5C5 4.44771 4.55229 4 4 4C3.44771 4 3 4.44771 3 5C3 5.5523 3.44771 6 4 6Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 20C4.55229 20 5 19.5523 5 19C5 18.4477 4.55229 18 4 18C3.44771 18 3 18.4477 3 19C3 19.5523 3.44771 20 4 20Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 12H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 19H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 5H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
List.displayName = "List";
var List_default = List;
var ListSuccess = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 5H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 12H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 19H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 21C5.10457 21 6 20.1046 6 19C6 17.8954 5.10457 17 4 17C2.89543 17 2 17.8954 2 19C2 20.1046 2.89543 21 4 21Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 5L3.5 6.5L6.5 3.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ListSuccess.displayName = "ListSuccess";
var ListSuccess_default = ListSuccess;
var ListTree = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 6L21 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 13H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 20H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 11C4 11.5304 4.21071 12.0391 4.58579 12.4142C4.96086 12.7893 5.46957 13 6 13H8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "4.5", cy: "6.5", r: "2.5", fill: "currentColor" })
      ]
    }
  )
);
ListTree.displayName = "ListTree";
var ListTree_default = ListTree;
var Loading = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Loading.displayName = "Loading";
var Loading_default = Loading;
var LogOut = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 17L21 12L16 7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 12H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3L10 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
LogOut.displayName = "LogOut";
var LogOut_default = LogOut;
var MessagePlus = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.25 18H10.5L8 20.5L5.5 18H4C2.89543 18 2 17.1046 2 16V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 10.5H12.5013", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.5005 10.5H17.4999", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.50049 10.5H7.49994", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 17.5H22", stroke: "currentColor", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 14.5V20.5", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
MessagePlus.displayName = "MessagePlus";
var MessagePlus_default = MessagePlus;
var Microphone = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.6666 5.62992C15.6666 3.60488 14.025 1.96326 11.9999 1.96326C9.97487 1.96326 8.33325 3.60488 8.33325 5.62992V11.1299C8.33325 13.155 9.97487 14.7966 11.9999 14.7966C14.025 14.7966 15.6666 13.155 15.6666 11.1299V5.62992Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 10.5C5 14.7753 7.60653 18.2975 12.0351 18.2975C16.4636 18.2975 19 14.7753 19 10.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 18.2975L12 22", stroke: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 22H16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Microphone.displayName = "Microphone";
var Microphone_default = Microphone;
var More = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5Z", fill: "currentColor" })
      ]
    }
  )
);
More.displayName = "More";
var More_default = More;
var MoreCircle = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 13.5C7.82843 13.5 8.5 12.8284 8.5 12C8.5 11.1716 7.82843 10.5 7 10.5C6.17157 10.5 5.5 11.1716 5.5 12C5.5 12.8284 6.17157 13.5 7 13.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 13.5C17.8284 13.5 18.5 12.8284 18.5 12C18.5 11.1716 17.8284 10.5 17 10.5C16.1716 10.5 15.5 11.1716 15.5 12C15.5 12.8284 16.1716 13.5 17 13.5Z", fill: "currentColor" })
      ]
    }
  )
);
MoreCircle.displayName = "MoreCircle";
var MoreCircle_default = MoreCircle;
var MoveToFolder = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 9.0961V4C2.5 3.44771 2.94771 3 3.5 3H9.5L12 6H20.5C21.0523 6 21.5 6.4477 21.5 7V20C21.5 20.5523 21.0523 21 20.5 21H2.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 11.8199L10.5 14.3199L8 16.8199", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 14.3199H2.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
MoveToFolder.displayName = "MoveToFolder";
var MoveToFolder_default = MoveToFolder;
var Newspaper = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5749 21.5001L9.09985 17.7001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.4999 21.4999V6.29993H12.4749L12.9499 10.0999L13.4249 13.8999L13.8999 17.6999L10.575 21.4999H21.4999Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.425 13.9H17.225", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.95 10.1H17.2249", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 2.5H12L12.475 6.29999L12.95 10.1L13.425 13.9L13.9 17.7H10.1H2.5V2.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.34985 6.29993H8.67485", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.34985 10.1H9.14985", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.34985 13.9H9.62485", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Newspaper.displayName = "Newspaper";
var Newspaper_default = Newspaper;
var Notebook = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V3Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 2V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 6H16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 10H16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 2H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 22H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Notebook.displayName = "Notebook";
var Notebook_default = Notebook;
var People = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 21.5C21 20.3181 20.7672 19.1478 20.3149 18.0558C19.8626 16.9639 19.1997 15.9718 18.364 15.136C17.5282 14.3003 16.5361 13.6374 15.4442 13.1851C14.3522 12.7328 13.1819 12.5 12 12.5C10.8181 12.5 9.64778 12.7328 8.55585 13.1851C7.46392 13.6374 6.47177 14.3003 5.63604 15.136C4.80031 15.9718 4.13738 16.9639 3.68508 18.0558C3.23279 19.1478 3 20.3181 3 21.5M15.5 6C15.5 7.933 13.933 9.5 12 9.5C10.067 9.5 8.5 7.933 8.5 6C8.5 4.067 10.067 2.5 12 2.5C13.933 2.5 15.5 4.067 15.5 6Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
People.displayName = "People";
var People_default = People;
var PeopleEdit = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 9C13.933 9 15.5 7.433 15.5 5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5C8.5 7.433 10.067 9 12 9Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.5 21L20.5 16L18.5 14L13.5 19V21H15.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 21C3 19.6008 3.32625 18.2208 3.95283 16.9697C4.57942 15.7186 5.48908 14.6309 6.60958 13.7928C7.73008 12.9548 9.03055 12.3895 10.4077 12.142C11.7849 11.8944 13.2008 11.9714 14.543 12.3667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
PeopleEdit.displayName = "PeopleEdit";
var PeopleEdit_default = PeopleEdit;
var PeopleGroup = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.4706 20.5C18.4706 19.4199 18.2576 18.3504 17.8437 17.3526C17.4299 16.3547 16.8232 15.448 16.0585 14.6843C15.2938 13.9206 14.386 13.3147 13.3868 12.9014C12.3877 12.4881 11.3168 12.2753 10.2353 12.2753C9.15382 12.2753 8.08293 12.4881 7.08378 12.9014C6.08463 13.3147 5.17678 13.9206 4.41206 14.6843C3.64734 15.448 3.04074 16.3547 2.62687 17.3526C2.21301 18.3504 2 19.4199 2 20.5M22 20.5C22 18.9711 21.6989 17.4558 21.1119 16.0405C20.5249 14.6251 19.6627 13.3353 18.5728 12.2468C17.7399 11.415 16.7852 10.7148 15.7431 10.1657C16.5152 9.0755 16.9678 7.75109 16.9678 6.33477C16.9677 4.91717 16.5167 3.59076 15.7431 2.5M13.4379 6.33532C13.4379 8.10179 12.004 9.5338 10.2353 9.5338C8.46654 9.5338 7.03268 8.10179 7.03268 6.33532C7.03268 4.56885 8.46654 3.13685 10.2353 3.13685C12.004 3.13685 13.4379 4.56885 13.4379 6.33532Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
PeopleGroup.displayName = "PeopleGroup";
var PeopleGroup_default = PeopleGroup;
var PeopleRound = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 8C13.3807 8 14.5 6.8807 14.5 5.5C14.5 4.11929 13.3807 3 12 3C10.6193 3 9.5 4.11929 9.5 5.5C9.5 6.8807 10.6193 8 12 8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5 11H10.5C10.0357 11 9.8035 11 9.60795 11.0192C7.7088 11.2063 6.2063 12.7088 6.01925 14.608C6 14.8035 6 15.0357 6 15.5H18C18 15.0357 18 14.8035 17.9807 14.608C17.7937 12.7088 16.2912 11.2063 14.392 11.0192C14.1965 11 13.9643 11 13.5 11Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.5 14.3918C21.4509 15.0039 22 15.7263 22 16.5C22 18.7091 17.5229 20.5 12 20.5C6.47715 20.5 2 18.7091 2 16.5C2 15.7263 2.54914 15.0039 3.5 14.3918", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.5 18L12 20.5L9.5 23", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
PeopleRound.displayName = "PeopleRound";
var PeopleRound_default = PeopleRound;
var PeopleSafe = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 4.62782L12.0043 2L21 4.62782V10.0169C21 15.6811 17.3751 20.2097 12.0013 22.0002C6.62605 20.2097 3 15.68 3 10.0143V4.62782Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 15.5C16 13.2908 14.2092 11.5 12 11.5C9.79085 11.5 8 13.2908 8 15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
PeopleSafe.displayName = "PeopleSafe";
var PeopleSafe_default = PeopleSafe;
var PictureInPicture = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 20H3C2.44771 20 2 19.5523 2 19V5C2 4.44771 2.44771 4 3 4H21C21.5523 4 22 4.44771 22 5V8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 12H13C12.4477 12 12 12.4477 12 13V19C12 19.5523 12.4477 20 13 20H21C21.5523 20 22 19.5523 22 19V13C22 12.4477 21.5523 12 21 12Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
PictureInPicture.displayName = "PictureInPicture";
var PictureInPicture_default = PictureInPicture;
var Pin = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.88051 8.87973C7.10034 7.65985 8.54996 7.6936 10.1256 8.55767L16.0167 5.2924L15.6833 3L20.9141 8.23075L18.6269 7.90258L15.3564 13.7885C16.1809 15.4702 16.2542 16.8137 15.0344 18.0336C15.0344 18.0336 13.0647 16.0639 11.4382 14.4374L3.91406 20L9.45989 12.4591C7.83338 10.8326 5.88051 8.87973 5.88051 8.87973Z", stroke: "currentColor", strokeLinejoin: "round" })
    }
  )
);
Pin.displayName = "Pin";
var Pin_default = Pin;
var PinOff = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.88026 8.96555C5.88026 8.96555 7.83314 10.9184 9.45964 12.5449L3.91382 20.0858L11.4379 14.5232C13.0644 16.1497 15.0341 18.1194 15.0341 18.1194M12.8285 7.14523L16.0164 5.37821L15.6831 3.08582L20.9138 8.31656L18.6266 7.9884L16.8568 11.1736", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.44897 3.03467L21.5511 20.1368", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
PinOff.displayName = "PinOff";
var PinOff_default = PinOff;
var PlaySpeed = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "1 4" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.6377 12V9.57165C9.6377 8.80185 10.471 8.32072 11.1377 8.70562L13.2407 9.91981L15.3437 11.134C16.0104 11.5189 16.0104 12.4811 15.3437 12.866L13.2407 14.0802L11.1377 15.2944C10.471 15.6793 9.6377 15.1982 9.6377 14.4284V12Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
PlaySpeed.displayName = "PlaySpeed";
var PlaySpeed_default = PlaySpeed;
var PlayerPause = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 1.71429, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.26296 3.2807H5.77157C5.0836 3.2807 4.52588 3.83842 4.52588 4.5264V19.4747C4.52588 20.1627 5.0836 20.7204 5.77157 20.7204H8.26296C8.95094 20.7204 9.50866 20.1627 9.50866 19.4747V4.5264C9.50866 3.83842 8.95094 3.2807 8.26296 3.2807Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2273 3.2807H15.7359C15.048 3.2807 14.4902 3.83842 14.4902 4.5264V19.4747C14.4902 20.1627 15.048 20.7204 15.7359 20.7204H18.2273C18.9153 20.7204 19.473 20.1627 19.473 19.4747V4.5264C19.473 3.83842 18.9153 3.2807 18.2273 3.2807Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
PlayerPause.displayName = "PlayerPause";
var PlayerPause_default = PlayerPause;
var Plus = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.0303 5L12.012 19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 12H19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Plus.displayName = "Plus";
var Plus_default = Plus;
var Question = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.26123 9.43899C9.26123 8.89456 9.51355 8.37244 9.96268 7.98747C10.4118 7.6025 11.021 7.38623 11.6561 7.38623H12.3404C12.9755 7.38623 13.5847 7.6025 14.0338 7.98747C14.4829 8.37244 14.7352 8.89456 14.7352 9.43899C14.7604 9.88324 14.6406 10.3237 14.3938 10.6939C14.147 11.0641 13.7865 11.3441 13.3667 11.4917C12.947 11.6886 12.5865 12.0619 12.3397 12.5555C12.0929 13.0492 11.973 13.6364 11.9982 14.2288", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.9976 18.6138C12.6879 18.6138 13.2476 18.0541 13.2476 17.3638C13.2476 16.6734 12.6879 16.1138 11.9976 16.1138C11.3072 16.1138 10.7476 16.6734 10.7476 17.3638C10.7476 18.0541 11.3072 18.6138 11.9976 18.6138Z", fill: "currentColor" })
      ]
    }
  )
);
Question.displayName = "Question";
var Question_default = Question;
var Refresh = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 4V12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 12V20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 12C3 16.9706 7.02945 21 12 21C14.4278 21 16.6311 20.0387 18.25 18.476", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.0004 12C21.0004 7.02945 16.9709 3 12.0004 3C9.45761 3 7.16116 4.05448 5.52441 5.75", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Refresh.displayName = "Refresh";
var Refresh_default = Refresh;
var Research = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.3285 7.17155C12.6046 6.4477 11.6046 6 10.5 6C9.39548 6 8.39548 6.4477 7.67163 7.17155", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.6108 16.6108L20.8535 20.8535", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Research.displayName = "Research";
var Research_default = Research;
var Return = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.4999 4L3 7L6.4999 10.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 7H14.4969C17.9384 7 20.861 9.8102 20.9952 13.25C21.1369 16.8848 18.1335 20 14.4969 20H5.9992", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Return.displayName = "Return";
var Return_default = Return;
var Right = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.5 6L15.5 12L9.5 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Right.displayName = "Right";
var Right_default = Right;
var RightSidebar = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 4.5C3 3.67158 3.67158 3 4.5 3H19.5C20.3285 3 21 3.67158 21 4.5V19.5C21 20.3285 20.3285 21 19.5 21H4.5C3.67158 21 3 20.3285 3 19.5V4.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 3V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 3H19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 21H19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
RightSidebar.displayName = "RightSidebar";
var RightSidebar_default = RightSidebar;
var RightTriangle = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 6L16 12L10 18V6Z", stroke: "currentColor", strokeLinejoin: "round" })
    }
  )
);
RightTriangle.displayName = "RightTriangle";
var RightTriangle_default = RightTriangle;
var Round = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" })
    }
  )
);
Round.displayName = "Round";
var Round_default = Round;
var Rss = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 22V3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V22L12 17.8636L4 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.9749 6.97485V12.9749", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.97485 9.97485H14.9749", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Rss.displayName = "Rss";
var Rss_default = Rss;
var SafeRetrieval = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.5 4.56369L12.0041 2L20.5 4.56369V9.8212C20.5 15.3473 17.0765 20.2531 12.0013 22C6.9246 20.2532 3.5 15.3461 3.5 9.8188V4.56369Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 15C13.933 15 15.5 13.433 15.5 11.5C15.5 9.567 13.933 8 12 8C10.067 8 8.5 9.567 8.5 11.5C8.5 13.433 10.067 15 12 15Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.5 14.5L17.5 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.5 9.82129C20.5 15.3473 17.0765 20.2532 12.0012 22.0001", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
SafeRetrieval.displayName = "SafeRetrieval";
var SafeRetrieval_default = SafeRetrieval;
var Seal = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.00058 18C4.44807 18 4.00015 17.5522 4.00019 16.9997C4.00025 16.2447 4.00024 15.2519 4.00021 14.5203C4.00019 13.968 4.44784 13.5213 5.00015 13.5213C6.47511 13.5213 8.15398 13.5213 9.50355 13.5213C9.9643 13.5213 9.96185 13.1126 9.96185 12.1396C9.96185 11.1666 7.51105 10.3471 7.51105 6.9264C7.51105 3.50576 10.0499 2.5 12.16 2.5C14.27 2.5 16.5683 3.50576 16.5683 6.9264C16.5683 10.3471 14.1304 10.8909 14.1304 12.1396C14.1304 13.3882 14.1303 13.5213 14.5206 13.5213C15.6429 13.5213 17.7526 13.5213 19.0014 13.5213C19.5537 13.5213 20.0001 13.9679 20.0001 14.5202C20.0001 15.252 20.0001 16.2452 20.0001 17.0003C20.0001 17.5526 19.5524 18 19.0001 18H5.00058Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 21H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Seal.displayName = "Seal";
var Seal_default = Seal;
var Search = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.6108 16.6109L20.8535 20.8535", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Search.displayName = "Search";
var Search_default = Search;
var Send = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 2.5L14.85 21.5L11.05 12.95L2.5 9.15L21.5 2.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 2.5L11.05 12.95", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Send.displayName = "Send";
var Send_default = Send;
var Setting = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.1419 21.5857C7.46635 21.0868 5.9749 20.1607 4.79393 18.9335C5.2345 18.4114 5.5 17.7367 5.5 17.0001C5.5 15.3432 4.15685 14.0001 2.5 14.0001C2.39977 14.0001 2.3007 14.005 2.203 14.0146C2.0699 13.3639 2 12.6902 2 12.0001C2 10.9548 2.16039 9.9469 2.4579 8.99975C2.47191 8.99995 2.48594 9.00005 2.5 9.00005C4.15685 9.00005 5.5 7.6569 5.5 6.00005C5.5 5.5244 5.3893 5.07465 5.1923 4.67506C6.34875 3.59975 7.76025 2.79501 9.32605 2.36157C9.8222 3.3341 10.8333 4.00007 12 4.00007C13.1667 4.00007 14.1778 3.3341 14.674 2.36157C16.2398 2.79501 17.6512 3.59975 18.8077 4.67506C18.6107 5.07465 18.5 5.5244 18.5 6.00005C18.5 7.6569 19.8432 9.00005 21.5 9.00005C21.5141 9.00005 21.5281 8.99995 21.5421 8.99975C21.8396 9.9469 22 10.9548 22 12.0001C22 12.6902 21.9301 13.3639 21.797 14.0146C21.6993 14.005 21.6002 14.0001 21.5 14.0001C19.8432 14.0001 18.5 15.3432 18.5 17.0001C18.5 17.7367 18.7655 18.4114 19.2061 18.9335C18.0251 20.1607 16.5336 21.0868 14.8581 21.5857C14.4714 20.376 13.338 19.5001 12 19.5001C10.662 19.5001 9.5286 20.376 9.1419 21.5857Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
Setting.displayName = "Setting";
var Setting_default = Setting;
var Share = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.1567 3.37292H20.627V9.84323", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.6272 14.6234V19.1892C20.6272 19.9834 19.9835 20.6271 19.1894 20.6271H4.81089C4.01679 20.6271 3.37305 19.9834 3.37305 19.1892V4.81077C3.37305 4.01667 4.01679 3.37292 4.81089 3.37292H9.12443", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.0784 10.9216L20.6271 3.37292", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Share.displayName = "Share";
var Share_default = Share;
var SidebarMenu = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 6H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 12H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18H16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenu_default = SidebarMenu;
var Skill = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17H11C10.7348 17 10.4804 17.1054 10.2929 17.2929C10.1054 17.4804 10 17.7348 10 18V19C10 19.5304 9.78929 20.0391 9.41421 20.4142C9.03914 20.7893 8.53043 21 8 21ZM8 21C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V5C6 4.46957 5.78929 3.96086 5.41421 3.58579C5.03914 3.21071 4.53043 3 4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8H6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.1141 10.376C14.3469 7.97923 12.2072 5.85483 11.1976 6.52214C10.1881 7.19017 12.3711 11.9769 11.9884 12.7778C11.6057 13.5788 10.0094 12.3116 9.42425 11.0248", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Skill.displayName = "Skill";
var Skill_default = Skill;
var Sort = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 5.75H14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 12.25H14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 5.75V18.75L21 15.25", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 18.75H14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Sort.displayName = "Sort";
var Sort_default = Sort;
var SortAmountDown = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4H21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 20.5L3 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 3.5V20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 9H19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 14H17.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 19H15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
SortAmountDown.displayName = "SortAmountDown";
var SortAmountDown_default = SortAmountDown;
var SortAmountUp = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5H21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 8L6.5 4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.5 4V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 9.5H19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 14.5H17.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 19.5H15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
SortAmountUp.displayName = "SortAmountUp";
var SortAmountUp_default = SortAmountUp;
var Square = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.5 3H4.5C3.67158 3 3 3.67158 3 4.5V19.5C3 20.3285 3.67158 21 4.5 21H19.5C20.3285 21 21 20.3285 21 19.5V4.5C21 3.67158 20.3285 3 19.5 3Z", stroke: "currentColor" })
    }
  )
);
Square.displayName = "Square";
var Square_default = Square;
var SquareSmall = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 6H7C6.4477 6 6 6.4477 6 7V17C6 17.5523 6.4477 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.4477 17.5523 6 17 6Z", stroke: "currentColor" })
    }
  )
);
SquareSmall.displayName = "SquareSmall";
var SquareSmall_default = SquareSmall;
var Tag = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M22.2097 14.8705L14.88 22.202C14.4966 22.586 13.9762 22.8018 13.4335 22.8018C12.8909 22.8018 12.3705 22.586 11.987 22.202L2.8042 13.027V2.80176H13.0268L22.2097 11.9869C23.0024 12.7846 23.0024 14.0728 22.2097 14.8705Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.25 10.5C9.94035 10.5 10.5 9.94035 10.5 9.25C10.5 8.55965 9.94035 8 9.25 8C8.55965 8 8 8.55965 8 9.25C8 9.94035 8.55965 10.5 9.25 10.5Z", fill: "currentColor" })
      ]
    }
  )
);
Tag.displayName = "Tag";
var Tag_default = Tag;
var ThumbsDown = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1896 14.7V18.3C10.1896 19.7911 11.3985 21 12.8896 21L16.4896 12.9V2.99999H6.03163C5.13408 2.98985 4.36622 3.64253 4.23163 4.52999L2.98963 12.63C2.91038 13.1521 3.06443 13.6827 3.41096 14.0812C3.7575 14.4797 4.26156 14.706 4.78963 14.7H10.1896Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.4897 3.00002H18.8927C19.9471 2.98138 20.8484 3.75504 20.9897 4.80002V11.1C20.8484 12.145 19.9471 13.0187 18.8927 13H16.4897V3.00002Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
ThumbsDown.displayName = "ThumbsDown";
var ThumbsDown_default = ThumbsDown;
var ThumbsUp = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.8 9.3V5.7C13.8 4.20883 12.5912 3 11.1 3L7.5 11.1V21H17.958C18.8556 21.0102 19.6234 20.3574 19.758 19.47L21 11.37C21.0793 10.8478 20.9252 10.3173 20.5786 9.91875C20.2321 9.52025 19.7281 9.294 19.2 9.3H13.8Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.5 11.0001H5.097C4.04266 10.9815 3.14135 11.8548 3 12.8998V19.1998C3.14135 20.2448 4.04266 21.0185 5.097 20.9998H7.5V11.0001Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
ThumbsUp.displayName = "ThumbsUp";
var ThumbsUp_default = ThumbsUp;
var Time = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.0043 6L12.0037 12.0044L16.2434 16.2441", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Time.displayName = "Time";
var Time_default = Time;
var ToTop = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.0042 7.05023V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 13L12 7L18 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 3H18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ToTop.displayName = "ToTop";
var ToTop_default = ToTop;
var Translate = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.1428 18.5H19.8571M21 21L19.8571 18.5L21 21ZM13 21L14.1428 18.5L13 21ZM14.1428 18.5L17 12L19.8571 18.5H14.1428Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 3L8.5 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 5.5H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 8C5 8 5.89475 11.1304 8.1316 12.8695C10.3684 14.6087 14 16 14 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 5.5C12 5.5 11.1052 9.6087 8.8684 11.8913C6.6316 14.1739 3 16 3 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Translate.displayName = "Translate";
var Translate_default = Translate;
var Up = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.5 15L12.5 9L18.5 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  )
);
Up.displayName = "Up";
var Up_default = Up;
var Upload = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 8L12 3L7 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 3L12 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 14L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Upload.displayName = "Upload";
var Upload_default = Upload;
var ViewGridCard = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.99927 4.00024H3.99927V10.0002H9.99927V4.00024Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.9993 4.00024H13.9993V10.0002H19.9993V4.00024Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.99927 14.0002H3.99927V20.0002H9.99927V14.0002Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.9993 14.0002H13.9993V20.0002H19.9993V14.0002Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
ViewGridCard.displayName = "ViewGridCard";
var ViewGridCard_default = ViewGridCard;
var ViewOnNewTab = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.0166 19.0166C21.0166 20.1212 20.1212 21.0166 19.0166 21.0166H4.9834C3.87883 21.0166 2.9834 20.1212 2.9834 19.0166V4.9834C2.9834 3.87883 3.87883 2.9834 4.9834 2.9834H19.0166C20.1212 2.9834 21.0166 3.87883 21.0166 4.9834V19.0166Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.55446 21.0166V17.4455C8.55446 16.341 7.65903 15.4455 6.55446 15.4455H2.9834", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 13V7H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 7L11 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ViewOnNewTab.displayName = "ViewOnNewTab";
var ViewOnNewTab_default = ViewOnNewTab;
var ViewOnOtherPage = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 5.46338L3 19.4634C3 20.5679 3.89543 21.4634 5 21.4634L19 21.4634C20.1046 21.4634 21 20.5679 21 19.4634L21 5.46338C21 4.35881 20.1046 3.46338 19 3.46338L5 3.46338C3.89543 3.46338 3 4.35881 3 5.46338Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 16.4634L6 16.4634C7.10457 16.4634 8 17.3588 8 18.4634L8 21.4634", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 7.46338L17 7.46338L17 12.4634", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17 7.46338L12 12.4634", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
ViewOnOtherPage.displayName = "ViewOnOtherPage";
var ViewOnOtherPage_default = ViewOnOtherPage;
var VolumeMute = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.3674 10.1429L16.1248 14.3855", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.1248 10.1429L20.3674 14.3855", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 3V21C8.5 21 5.89925 16.4195 5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925C5.89925 7.5054 8.5 3 12 3Z", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    }
  )
);
VolumeMute.displayName = "VolumeMute";
var VolumeMute_default = VolumeMute;
var VolumeNotice = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 3V21C8.5 21 5.89925 16.4195 5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925C5.89925 7.5054 8.5 3 12 3Z", stroke: "currentColor", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 7.5C16.3116 7.77825 16.5941 8.08985 16.8421 8.4294C17.5694 9.4252 18 10.6611 18 12C18 13.3273 17.5768 14.5534 16.8609 15.5447C16.6084 15.8943 16.3196 16.2147 16 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.1179 20.5928C20.0418 18.8476 22 15.6525 22 12C22 8.40422 20.1021 5.25172 17.2535 3.4895", stroke: "currentColor", strokeLinecap: "round" })
      ]
    }
  )
);
VolumeNotice.displayName = "VolumeNotice";
var VolumeNotice_default = VolumeNotice;
var Write = react.forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 12V9.5L19.5 2L22 4.5L14.5 12H12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 12H4.5C3.11929 12 2 13.1193 2 14.5C2 15.8807 3.11929 17 4.5 17H19.5C20.8807 17 22 18.1193 22 19.5C22 20.8807 20.8807 22 19.5 22H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  )
);
Write.displayName = "Write";
var Write_default = Write;

// src/filled/index.ts
var filled_exports = {};
__export(filled_exports, {
  Application: () => Application_default2,
  Attention: () => Attention_default2,
  Book: () => Book_default2,
  CheckCircle: () => CheckCircle_default2,
  CloseCircle: () => CloseCircle_default2,
  Home: () => Home_default2,
  Info: () => Info_default2,
  PlayerPause: () => PlayerPause_default2,
  PlayerPlay: () => PlayerPlay_default,
  Rss: () => Rss_default2
});
var Application2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.9996 5.00037C20.5519 5.00037 21.0004 5.44769 21.0004 5.99998C21.0004 6.55226 20.5519 6.99958 19.9996 6.99958H4C3.44772 6.99958 3.00039 6.55226 3.00039 5.99998C3.00039 5.44769 3.44772 5.00037 4 5.00037H19.9996Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.5 2.00037C17.0523 2.00037 17.4996 2.44769 17.4996 2.99998C17.4996 3.55226 17.0523 3.99958 16.5 3.99958H7.5C6.94771 3.99958 6.50039 3.55226 6.50039 2.99998C6.50039 2.44769 6.94771 2.00037 7.5 2.00037H16.5Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.5008 8.00037C21.6049 8.00068 22.501 8.89539 22.5012 9.99958V20.0004C22.501 21.1046 21.6049 21.9993 20.5008 21.9996H3.50039C2.39613 21.9994 1.50021 21.1046 1.5 20.0004V9.99958C1.50021 8.89532 2.39613 8.00058 3.50039 8.00037H20.5008ZM12 11.0004C11.8678 11.0004 11.7387 11.0518 11.6344 11.1445C11.5299 11.2373 11.4595 11.3637 11.4152 11.4949C11.3763 11.6116 11.3401 11.7286 11.3051 11.8453C10.955 13.0124 10.0124 13.9549 8.84531 14.3051C8.72858 14.3401 8.61165 14.3775 8.49492 14.4164C8.36385 14.4606 8.23727 14.5301 8.14453 14.6343C8.05186 14.7387 7.99922 14.8678 7.99922 15C7.99922 15.1322 8.05186 15.2613 8.14453 15.3656C8.23727 15.4699 8.36384 15.5393 8.49492 15.5836C8.61165 15.6225 8.72858 15.6599 8.84531 15.6949C10.0122 16.045 10.955 16.9877 11.3051 18.1547C11.3401 18.2714 11.3763 18.3884 11.4152 18.5051C11.4595 18.6363 11.5299 18.7627 11.6344 18.8554C11.7387 18.9481 11.8678 18.9996 12 18.9996C12.1319 18.9995 12.2603 18.9478 12.3645 18.8554C12.4688 18.7627 12.5393 18.6362 12.5836 18.5051C12.6225 18.3883 12.6599 18.2714 12.6949 18.1547C13.0452 16.9871 13.9871 16.0452 15.1547 15.6949C15.2713 15.6599 15.3884 15.6225 15.5051 15.5836C15.6361 15.5393 15.7628 15.4699 15.8555 15.3656C15.9481 15.2613 15.9996 15.1322 15.9996 15C15.9996 14.8678 15.9481 14.7387 15.8555 14.6343C15.7628 14.5301 15.6361 14.4607 15.5051 14.4164C15.3884 14.3775 15.2713 14.3401 15.1547 14.3051C13.9877 13.955 13.045 13.0123 12.6949 11.8453C12.6599 11.7286 12.6225 11.6116 12.5836 11.4949C12.5393 11.3638 12.4688 11.2372 12.3645 11.1445C12.2603 11.0521 12.1319 11.0004 12 11.0004ZM15 10.691C14.9144 10.691 14.8316 10.7244 14.748 10.7824C14.6652 10.8403 14.5829 10.9186 14.4996 11.0004C14.4664 11.0336 14.4346 11.0668 14.4047 11.1C14.3549 11.1553 14.3105 11.2111 14.2699 11.2664C14.2133 11.3077 14.1566 11.3537 14.1 11.4047C14.0668 11.4345 14.0335 11.4664 14.0004 11.4996C13.9186 11.5829 13.8403 11.6652 13.7824 11.748C13.7245 11.8316 13.691 11.9144 13.691 12C13.691 12.0855 13.7245 12.1684 13.7824 12.2519C13.8403 12.3347 13.9186 12.4171 14.0004 12.5004C14.0335 12.5335 14.0668 12.5654 14.1 12.5953C14.1564 12.6461 14.2135 12.6912 14.2699 12.7324C14.3106 12.7879 14.3548 12.8445 14.4047 12.9C14.4346 12.9332 14.4663 12.9675 14.4996 13.0008C14.583 13.0826 14.6651 13.1608 14.748 13.2187C14.8315 13.2766 14.9145 13.309 15 13.309C15.0855 13.309 15.1685 13.2766 15.252 13.2187C15.3349 13.1608 15.417 13.0826 15.5004 13.0008C15.5337 12.9675 15.5654 12.9332 15.5953 12.9C15.6456 12.8441 15.6904 12.7872 15.7312 12.7312C15.7871 12.6904 15.8441 12.6455 15.9 12.5953C15.9332 12.5654 15.9676 12.5336 16.0008 12.5004C16.0826 12.417 16.1609 12.3348 16.2187 12.2519C16.2766 12.1685 16.309 12.0855 16.309 12C16.309 11.9145 16.2766 11.8315 16.2187 11.748C16.1609 11.6651 16.0826 11.5829 16.0008 11.4996C15.9676 11.4664 15.9332 11.4346 15.9 11.4047C15.8441 11.3544 15.7871 11.3096 15.7312 11.2687C15.6903 11.2127 15.6457 11.156 15.5953 11.1C15.5654 11.0668 15.5336 11.0336 15.5004 11.0004C15.4171 10.9186 15.3348 10.8403 15.252 10.7824C15.1684 10.7244 15.0856 10.691 15 10.691Z" })
      ]
    }
  )
);
Application2.displayName = "Application";
var Application_default2 = Application2;
var Attention2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 1C15.0373 1 17.7888 2.23217 19.7783 4.22168C21.7678 6.21121 23 8.96273 23 12C23 15.0373 21.7678 17.7888 19.7783 19.7783C17.7888 21.7678 15.0373 23 12 23C8.96273 23 6.21121 21.7678 4.22168 19.7783C2.23217 17.7888 1 15.0373 1 12C1 8.96273 2.23218 6.21121 4.22168 4.22168C6.21121 2.23218 8.96273 1 12 1ZM12 15.1992C11.3097 15.1992 10.7501 15.759 10.75 16.4492C10.75 17.1396 11.3097 17.6992 12 17.6992C12.6903 17.6992 13.25 17.1396 13.25 16.4492C13.2499 15.759 12.6903 15.1992 12 15.1992ZM12 5.30078C11.4477 5.30078 11 5.7485 11 6.30078V12.3008C11.0001 12.853 11.4478 13.3008 12 13.3008C12.5522 13.3008 12.9999 12.853 13 12.3008V6.30078C13 5.7485 12.5523 5.30078 12 5.30078Z" })
    }
  )
);
Attention2.displayName = "Attention";
var Attention_default2 = Attention2;
var Book2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.49961 18.5C3.49961 14.6483 3.49961 5.49998 3.49961 5.49998C3.49961 3.84312 4.84275 2.49998 6.49961 2.49998H17.4996V15.5C17.4996 15.5 9.11591 15.5 6.49961 15.5C4.84961 15.5 3.49961 16.8421 3.49961 18.5Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 18.4996V5.49998C2.5 3.29084 4.29047 1.50037 6.49961 1.50037H17.5C18.0521 1.50058 18.4996 1.94782 18.4996 2.49998V15.4996C18.4996 16.0517 18.0521 16.5002 17.5 16.5004H6.49961C5.40031 16.5004 4.49943 17.3959 4.49922 18.4996C4.49922 19.0519 4.05189 19.5004 3.49961 19.5004C2.94732 19.5004 2.5 19.0519 2.5 18.4996ZM4.49922 15.0379C5.08859 14.6962 5.77197 14.5 6.49961 14.5H16.4992V3.49959H6.49961C5.39504 3.49959 4.49922 4.39541 4.49922 5.49998V15.0379Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.4992 3.49998C19.4992 2.94769 19.9477 2.50037 20.5 2.50037C21.0521 2.50058 21.4996 2.94782 21.4996 3.49998V21.5C21.4996 22.0521 21.0521 22.4994 20.5 22.4996H6.49961C4.29047 22.4996 2.5 20.7087 2.5 18.4996C2.5 16.2905 4.29047 14.5 6.49961 14.5L17.5 14.5004C18.0521 14.5006 18.4996 14.9474 18.4996 15.4996C18.4996 16.0517 18.0521 16.5002 17.5 16.5004H6.49961C5.39504 16.5004 4.49922 17.395 4.49922 18.4996C4.49922 19.6042 5.39504 20.5004 6.49961 20.5004H19.4992V3.49998Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.9992 17.5004C17.5515 17.5004 18 17.9477 18 18.5C18 19.0523 17.5515 19.4996 16.9992 19.4996H6.99961C6.44732 19.4996 6 19.0523 6 18.5C6 17.9477 6.44732 17.5004 6.99961 17.5004H16.9992Z" })
      ]
    }
  )
);
Book2.displayName = "Book";
var Book_default2 = Book2;
var CheckCircle2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 1C15.0373 1 17.7888 2.23217 19.7783 4.22168C21.7678 6.21121 23 8.96273 23 12C23 15.0373 21.7678 17.7888 19.7783 19.7783C17.7888 21.7678 15.0373 23 12 23C8.96273 23 6.21121 21.7678 4.22168 19.7783C2.23217 17.7888 1 15.0373 1 12C1 8.96273 2.23218 6.21121 4.22168 4.22168C6.21121 2.23218 8.96273 1 12 1ZM17.207 8.49316C16.8165 8.10264 16.1835 8.10264 15.793 8.49316L10.5 13.7861L8.20703 11.4932C7.81651 11.1026 7.18349 11.1026 6.79297 11.4932C6.40247 11.8837 6.40245 12.5167 6.79297 12.9072L9.79297 15.9072C10.1835 16.2976 10.8165 16.2977 11.207 15.9072L17.207 9.90723C17.5975 9.51674 17.5975 8.8837 17.207 8.49316Z" })
    }
  )
);
CheckCircle2.displayName = "CheckCircle";
var CheckCircle_default2 = CheckCircle2;
var CloseCircle2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM15.5361 8.46484C15.1457 8.0744 14.5126 8.07456 14.1221 8.46484L12 10.5859L9.87891 8.46484C9.4884 8.07434 8.85537 8.07437 8.46484 8.46484C8.07439 8.85537 8.07434 9.48841 8.46484 9.87891L10.5859 12L8.46484 14.1221C8.07455 14.5126 8.0744 15.1457 8.46484 15.5361C8.85534 15.926 9.48856 15.9262 9.87891 15.5361L12 13.4141L14.1221 15.5361C14.5126 15.9259 15.1458 15.9264 15.5361 15.5361C15.9264 15.1458 15.9259 14.5126 15.5361 14.1221L13.4141 12L15.5361 9.87891C15.9262 9.48856 15.926 8.85534 15.5361 8.46484Z" })
    }
  )
);
CloseCircle2.displayName = "CloseCircle";
var CloseCircle_default2 = CloseCircle2;
var Home2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.375 1.71951C11.7402 1.42737 12.259 1.42744 12.6242 1.71951L23.1804 10.164C23.6114 10.5091 23.6812 11.138 23.3363 11.5691C23.0129 11.9733 22.4401 12.0596 22.0144 11.7847L21.9312 11.725L20.9164 10.9129V21.4996C20.9164 22.0518 20.469 22.5003 19.9168 22.5004H4.08357C3.53129 22.5004 3.08396 22.0519 3.08396 21.4996V10.9129L2.06912 11.725C1.63792 12.0699 1.00908 12.0002 0.664038 11.5691C0.319081 11.1379 0.388811 10.5091 0.819898 10.164L11.375 1.71951ZM5.08318 9.31326V20.5H18.9172V9.31326L11.9996 3.77966L5.08318 9.31326Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.36117 14.6389V21.5H14.6389V14.6389H9.36117Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.6393 13.6393C15.1914 13.6395 15.6389 14.0867 15.6389 14.6389V21.5002C15.6388 22.0522 15.1913 22.4996 14.6393 22.4998H9.36117C8.80897 22.4998 8.36169 22.0524 8.36156 21.5002V14.6389C8.36156 14.0866 8.80889 13.6393 9.36117 13.6393H14.6393ZM10.3608 20.4994H13.6385V15.6385H10.3608V20.4994Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.9166 20.5004C20.4689 20.5004 20.9164 20.9473 20.9164 21.4996C20.9164 22.0518 20.469 22.5003 19.9168 22.5004H4.08357C3.53129 22.5004 3.08396 22.0519 3.08396 21.4996C3.08396 20.9473 3.53111 20.5004 4.0834 20.5004H19.9166Z" })
      ]
    }
  )
);
Home2.displayName = "Home";
var Home_default2 = Home2;
var Info2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 1C15.0373 1 17.7888 2.23217 19.7783 4.22168C21.7678 6.21121 23 8.96273 23 12C23 15.0373 21.7678 17.7888 19.7783 19.7783C17.7888 21.7678 15.0373 23 12 23C8.96273 23 6.21121 21.7678 4.22168 19.7783C2.23217 17.7888 1 15.0373 1 12C1 8.96273 2.23218 6.21121 4.22168 4.22168C6.21121 2.23218 8.96273 1 12 1ZM11.25 9C10.6977 9 10.25 9.44771 10.25 10C10.25 10.5523 10.6977 11 11.25 11V16H10.5C9.94771 16 9.5 16.4477 9.5 17C9.5 17.5523 9.94771 18 10.5 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H13.25V10C13.25 9.44771 12.8023 9 12.25 9H11.25ZM12 5.5C11.3097 5.5 10.75 6.05965 10.75 6.75C10.75 7.44035 11.3097 8 12 8C12.6903 8 13.25 7.44035 13.25 6.75C13.25 6.05965 12.6903 5.5 12 5.5Z" })
    }
  )
);
Info2.displayName = "Info";
var Info_default2 = Info2;
var PlayerPause2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.26296 3.2807H5.77157C5.0836 3.2807 4.52588 3.83842 4.52588 4.5264V19.4747C4.52588 20.1627 5.0836 20.7204 5.77157 20.7204H8.26296C8.95094 20.7204 9.50866 20.1627 9.50866 19.4747V4.5264C9.50866 3.83842 8.95094 3.2807 8.26296 3.2807Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2273 3.2807H15.7359C15.048 3.2807 14.4902 3.83842 14.4902 4.5264V19.4747C14.4902 20.1627 15.048 20.7204 15.7359 20.7204H18.2273C18.9153 20.7204 19.473 20.1627 19.473 19.4747V4.5264C19.473 3.83842 18.9153 3.2807 18.2273 3.2807Z" })
      ]
    }
  )
);
PlayerPause2.displayName = "PlayerPause";
var PlayerPause_default2 = PlayerPause2;
var PlayerPlay = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.1771 9.85627C19.7955 10.8273 19.7955 13.1727 18.1771 14.1437L8.03624 20.2283C6.36993 21.228 4.25 20.0278 4.25 18.0845L4.25 5.91547C4.25 3.97224 6.36993 2.77196 8.03624 3.77174L18.1771 9.85627Z" })
    }
  )
);
PlayerPlay.displayName = "PlayerPlay";
var PlayerPlay_default = PlayerPlay;
var Rss2 = react.forwardRef(
  ({ size = 24, color = "currentColor", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.0008 1.00079C20.105 1.00111 21.001 1.89583 21.0012 3.00001V22.0008C21.0009 22.3494 20.8184 22.6737 20.5207 22.8551C20.2228 23.0363 19.8508 23.049 19.541 22.8891L12 18.9891L4.46016 22.8891C4.15038 23.0492 3.77844 23.0362 3.48047 22.8551C3.1826 22.6738 3.00026 22.3495 3 22.0008V3.00001C3.00021 1.89575 3.89613 1.001 5.00039 1.00079H19.0008ZM11.9754 5.9754C11.4231 5.9754 10.9758 6.42273 10.9758 6.97501V8.9754H8.97539C8.42311 8.9754 7.97461 9.42273 7.97461 9.97501C7.97469 10.5272 8.42315 10.9746 8.97539 10.9746H10.9758V12.975C10.9759 13.5272 11.4232 13.9746 11.9754 13.9746C12.5274 13.9743 12.9749 13.527 12.975 12.975V10.9746H14.9754C15.5274 10.9743 15.9749 10.527 15.975 9.97501C15.975 9.42292 15.5274 8.97572 14.9754 8.9754H12.975V6.97501C12.975 6.42292 12.5274 5.97572 11.9754 5.9754Z" })
    }
  )
);
Rss2.displayName = "Rss";
var Rss_default2 = Rss2;

// src/colored/index.ts
var colored_exports = {};
__export(colored_exports, {
  FileAudio: () => FileAudio_default2,
  FileCsv: () => FileCsv_default,
  FileDoc: () => FileDoc_default,
  FileHtml: () => FileHtml_default,
  FileMd: () => FileMd_default,
  FilePptx: () => FilePptx_default,
  FileTxt: () => FileTxt_default2,
  FileVideo: () => FileVideo_default2,
  FileXls: () => FileXls_default,
  Folder: () => Folder_default
});
var FileAudio2 = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9753 7.193C14.5652 7.1926 14.1721 7.02954 13.8821 6.7396C13.5922 6.44966 13.4291 6.05654 13.4287 5.6465V3.5H6.51825C5.98311 3.5 5.46987 3.71253 5.0914 4.09087C4.71292 4.4692 4.5002 4.98236 4.5 5.5175V17.684C4.5006 18.2189 4.7135 18.7317 5.09193 19.1097C5.47036 19.4877 5.98337 19.7 6.51825 19.7H14.8133C15.0784 19.7001 15.3409 19.648 15.5858 19.5466C15.8308 19.4452 16.0534 19.2966 16.2409 19.1091C16.4283 18.9217 16.5771 18.6992 16.6785 18.4543C16.78 18.2094 16.8322 17.9469 16.8322 17.6818V7.193H14.9753Z", fill: "#FF9908" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8322 7.193H14.9752C14.5652 7.1926 14.172 7.02954 13.8821 6.7396C13.5922 6.44966 13.4291 6.05654 13.4287 5.6465V3.5L16.8322 7.193Z", fill: "#FF9908" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.9912 8.50562C12.2218 8.50562 12.4434 8.59652 12.6064 8.75952C12.7695 8.92256 12.8613 9.14418 12.8613 9.37476L12.8643 12.6062C12.8645 12.614 12.8662 12.6218 12.8662 12.6296C12.8662 13.1157 12.4724 13.5094 11.9863 13.5095C11.5002 13.5095 11.1065 13.1158 11.1064 12.6296C11.1064 12.1435 11.5002 11.7498 11.9863 11.7498C12.0329 11.7498 12.0785 11.7535 12.123 11.7605V9.62866C12.123 9.52812 12.0828 9.4312 12.0117 9.36011C11.9407 9.28917 11.8445 9.24882 11.7441 9.24878H9.84473C9.74437 9.2489 9.64813 9.28914 9.57715 9.36011C9.50606 9.4312 9.46582 9.52812 9.46582 9.62866V12.5398C9.46881 12.5693 9.4707 12.5993 9.4707 12.6296C9.47069 13.1158 9.07598 13.5095 8.58984 13.5095C8.10387 13.5093 7.70997 13.1157 7.70996 12.6296C7.70996 12.1436 8.10387 11.7499 8.58984 11.7498C8.63388 11.7498 8.67742 11.7533 8.71973 11.7595V9.37476C8.71991 9.14412 8.81244 8.92254 8.97559 8.75952C9.13862 8.59678 9.35949 8.50571 9.58984 8.50562H11.9912Z", fill: "#FF9908" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#FF9908" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.4578 18.4173C17.4578 18.6114 17.4223 18.7783 17.3513 18.918C17.2802 19.0571 17.1829 19.1642 17.0592 19.2394C16.9361 19.3139 16.7961 19.3512 16.6392 19.3512C16.4818 19.3512 16.3412 19.3139 16.2176 19.2394C16.0944 19.1642 15.9974 19.0568 15.9264 18.9171C15.8553 18.7774 15.8198 18.6108 15.8198 18.4173C15.8198 18.2232 15.8553 18.0566 15.9264 17.9175C15.9974 17.7778 16.0944 17.6707 16.2176 17.5961C16.3412 17.5209 16.4818 17.4833 16.6392 17.4833C16.7961 17.4833 16.9361 17.5209 17.0592 17.5961C17.1829 17.6707 17.2802 17.7778 17.3513 17.9175C17.4223 18.0566 17.4578 18.2232 17.4578 18.4173ZM17.1861 18.4173C17.1861 18.2693 17.1622 18.1447 17.1142 18.0435C17.0669 17.9417 17.0018 17.8648 16.9189 17.8127C16.8366 17.76 16.7434 17.7337 16.6392 17.7337C16.5345 17.7337 16.441 17.76 16.3587 17.8127C16.2764 17.8648 16.2113 17.9417 16.1634 18.0435C16.116 18.1447 16.0924 18.2693 16.0924 18.4173C16.0924 18.5653 16.116 18.6901 16.1634 18.7919C16.2113 18.8931 16.2764 18.9701 16.3587 19.0228C16.441 19.0748 16.5345 19.1009 16.6392 19.1009C16.7434 19.1009 16.8366 19.0748 16.9189 19.0228C17.0018 18.9701 17.0669 18.8931 17.1142 18.7919C17.1622 18.6901 17.1861 18.5653 17.1861 18.4173Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.4789 17.5082V19.3264H15.2046V17.5082H15.4789Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.989 19.3264H13.4004V17.5082H14.0076C14.1858 17.5082 14.3388 17.5446 14.4666 17.6174C14.5945 17.6896 14.6924 17.7935 14.7605 17.929C14.8291 18.0639 14.8635 18.2258 14.8635 18.4146C14.8635 18.604 14.8288 18.7668 14.7596 18.9029C14.6909 19.039 14.5915 19.1438 14.4613 19.2172C14.3311 19.29 14.1737 19.3264 13.989 19.3264ZM13.6747 19.0867H13.9739C14.1124 19.0867 14.2275 19.0606 14.3192 19.0085C14.411 18.9559 14.4796 18.8798 14.5252 18.7804C14.5708 18.6803 14.5936 18.5584 14.5936 18.4146C14.5936 18.272 14.5708 18.1509 14.5252 18.0515C14.4802 17.9521 14.4131 17.8766 14.3237 17.8251C14.2343 17.7736 14.1233 17.7479 13.9908 17.7479H13.6747V19.0867Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.7263 17.5082H13.0016V18.704C13.0016 18.8313 12.9717 18.944 12.9119 19.0423C12.8521 19.1399 12.7681 19.2169 12.6598 19.2731C12.5514 19.3287 12.4245 19.3565 12.2789 19.3565C12.1339 19.3565 12.0072 19.3287 11.8989 19.2731C11.7906 19.2169 11.7066 19.1399 11.6468 19.0423C11.587 18.944 11.5571 18.8313 11.5571 18.704V17.5082H11.8315V18.6818C11.8315 18.7641 11.8495 18.8372 11.8856 18.9011C11.9223 18.965 11.9741 19.0153 12.041 19.052C12.1079 19.0881 12.1872 19.1062 12.2789 19.1062C12.3712 19.1062 12.4508 19.0881 12.5177 19.052C12.5852 19.0153 12.6367 18.965 12.6722 18.9011C12.7083 18.8372 12.7263 18.7641 12.7263 18.6818V17.5082Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.96014 19.3264H9.66895L10.3232 17.5082H10.6402L11.2945 19.3264H11.0033L10.4893 17.8384H10.4751L9.96014 19.3264ZM10.009 18.6144H10.9536V18.8452H10.009V18.6144Z", fill: "white" })
      ]
    }
  )
);
FileAudio2.displayName = "FileAudio";
var FileAudio_default2 = FileAudio2;
var FileCsv = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9733 6.69375C14.5633 6.69335 14.1701 6.53028 13.8802 6.24034C13.5903 5.95041 13.4272 5.55728 13.4268 5.14724V3H6.51631C5.98104 3 5.46768 3.21264 5.08918 3.59114C4.71069 3.96963 4.49805 4.48297 4.49805 5.01824V17.1847C4.49805 17.72 4.71069 18.2334 5.08918 18.6119C5.46768 18.9904 5.98104 19.203 6.51631 19.203H14.8113C15.3466 19.203 15.8599 18.9904 16.2384 18.6119C16.6169 18.2334 16.8296 17.72 16.8296 17.1847V6.69375H14.9733Z", fill: "#00C650" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8305 6.69375H14.9742C14.5642 6.69335 14.1711 6.53028 13.8811 6.24034C13.5912 5.95041 13.4281 5.55728 13.4277 5.14724V3L16.8305 6.69375Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.5635 17.4682L16.1313 19.1855H16.1537L16.7204 17.4682H17.1551L16.3859 19.65H15.898L15.1299 17.4682H15.5635Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.5087 18.068C14.4988 17.9749 14.4569 17.9025 14.383 17.8506C14.3098 17.7988 14.2147 17.7729 14.0975 17.7729C14.0151 17.7729 13.9444 17.7853 13.8855 17.8102C13.8265 17.835 13.7814 17.8688 13.7502 17.9114C13.7189 17.954 13.7029 18.0026 13.7022 18.0573C13.7022 18.1028 13.7125 18.1422 13.7331 18.1756C13.7544 18.209 13.7832 18.2374 13.8194 18.2608C13.8556 18.2835 13.8958 18.3027 13.9398 18.3183C13.9838 18.334 14.0282 18.3471 14.073 18.3577L14.2775 18.4089C14.3599 18.4281 14.4391 18.454 14.5151 18.4866C14.5918 18.5193 14.6603 18.5605 14.7207 18.6102C14.7818 18.6599 14.8301 18.72 14.8656 18.7903C14.9011 18.8606 14.9189 18.943 14.9189 19.0374C14.9189 19.1653 14.8862 19.2778 14.8208 19.3751C14.7555 19.4717 14.661 19.5474 14.5375 19.6021C14.4146 19.656 14.2658 19.683 14.0911 19.683C13.9213 19.683 13.774 19.6567 13.649 19.6042C13.5247 19.5516 13.4274 19.4749 13.3571 19.3741C13.2875 19.2732 13.2498 19.1504 13.2441 19.0055H13.633C13.6387 19.0815 13.6621 19.1447 13.7033 19.1951C13.7445 19.2455 13.7981 19.2832 13.8642 19.308C13.9309 19.3329 14.0055 19.3453 14.0879 19.3453C14.1738 19.3453 14.2491 19.3325 14.3137 19.307C14.3791 19.2807 14.4302 19.2445 14.4672 19.1983C14.5041 19.1514 14.5229 19.0967 14.5236 19.0342C14.5229 18.9774 14.5062 18.9305 14.4735 18.8936C14.4409 18.856 14.3951 18.8247 14.3361 18.7999C14.2779 18.7743 14.2097 18.7516 14.1316 18.7317L13.8833 18.6678C13.7037 18.6216 13.5616 18.5516 13.4572 18.4579C13.3535 18.3634 13.3017 18.2381 13.3017 18.0818C13.3017 17.9533 13.3365 17.8407 13.4061 17.7441C13.4764 17.6475 13.5719 17.5726 13.6926 17.5193C13.8134 17.4653 13.9501 17.4384 14.1028 17.4384C14.2576 17.4384 14.3933 17.4653 14.5098 17.5193C14.627 17.5726 14.7189 17.6468 14.7857 17.742C14.8525 17.8364 14.8869 17.9451 14.889 18.068H14.5087Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.961 18.2043H12.5626C12.5512 18.139 12.5303 18.0811 12.4997 18.0307C12.4692 17.9795 12.4312 17.9362 12.3857 17.9007C12.3403 17.8652 12.2884 17.8386 12.2302 17.8208C12.1727 17.8023 12.1105 17.7931 12.0438 17.7931C11.9252 17.7931 11.82 17.8229 11.7284 17.8826C11.6368 17.9416 11.5651 18.0282 11.5132 18.1425C11.4614 18.2562 11.4355 18.395 11.4355 18.5591C11.4355 18.726 11.4614 18.8666 11.5132 18.981C11.5658 19.0946 11.6375 19.1805 11.7284 19.2388C11.82 19.2963 11.9248 19.3251 12.0427 19.3251C12.108 19.3251 12.1691 19.3166 12.2259 19.2995C12.2835 19.2817 12.335 19.2558 12.3804 19.2217C12.4266 19.1876 12.4653 19.1457 12.4965 19.096C12.5285 19.0463 12.5505 18.9895 12.5626 18.9256L12.961 18.9277C12.9461 19.0314 12.9138 19.1287 12.8641 19.2196C12.8151 19.3105 12.7508 19.3908 12.6713 19.4604C12.5917 19.5293 12.4987 19.5832 12.3921 19.6223C12.2856 19.6607 12.1673 19.6798 12.0374 19.6798C11.8456 19.6798 11.6744 19.6354 11.5239 19.5467C11.3733 19.4579 11.2547 19.3297 11.1681 19.1621C11.0814 18.9945 11.0381 18.7935 11.0381 18.5591C11.0381 18.324 11.0818 18.123 11.1691 17.9561C11.2565 17.7885 11.3754 17.6603 11.526 17.5715C11.6766 17.4827 11.847 17.4384 12.0374 17.4384C12.1588 17.4384 12.2718 17.4554 12.3762 17.4895C12.4806 17.5236 12.5736 17.5737 12.6553 17.6397C12.7369 17.705 12.8041 17.7853 12.8566 17.8805C12.9099 17.9749 12.9447 18.0829 12.961 18.2043Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.4439 19.6735C10.3792 19.6735 10.3238 19.6507 10.2777 19.6053C10.2315 19.5598 10.2088 19.5044 10.2095 19.4391C10.2088 19.3752 10.2315 19.3205 10.2777 19.275C10.3238 19.2296 10.3792 19.2068 10.4439 19.2068C10.5064 19.2068 10.5607 19.2296 10.6069 19.275C10.6537 19.3205 10.6775 19.3752 10.6782 19.4391C10.6775 19.4824 10.6662 19.5218 10.6441 19.5573C10.6228 19.5929 10.5944 19.6213 10.5589 19.6426C10.5241 19.6632 10.4858 19.6735 10.4439 19.6735Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.4157 14.313H7.91674C7.44049 14.313 7.05273 13.839 7.05273 13.2555V9.26623C7.05273 8.68348 7.44049 8.20947 7.91674 8.20947H13.418C13.8935 8.20947 14.2812 8.68348 14.2812 9.26623V13.2555C14.279 13.839 13.8912 14.313 13.4157 14.313ZM7.91674 8.74947C7.68349 8.74947 7.49449 8.98123 7.49449 9.26623V13.2555C7.49449 13.5405 7.68349 13.7722 7.91674 13.7722H13.418C13.6505 13.7722 13.8395 13.5405 13.8395 13.2555V9.26623C13.8395 8.98123 13.6505 8.74947 13.418 8.74947H7.91674Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.0582 11.9107H7.27148V12.4515H14.0582V11.9107Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.0582 10.0568H7.27148V10.5975H14.0582V10.0568Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.32 8.47949H11.7793V14.0422H12.32V8.47949Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.55002 8.47949H9.00928V14.0422H9.55002V8.47949Z", fill: "#00C650" })
      ]
    }
  )
);
FileCsv.displayName = "FileCsv";
var FileCsv_default = FileCsv;
var FileDoc = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9743 6.69375C14.5642 6.69335 14.1711 6.53028 13.8812 6.24034C13.5912 5.95041 13.4282 5.55728 13.4278 5.14724V3H6.51803C6.25292 2.9999 5.99039 3.05202 5.74544 3.15341C5.50049 3.25479 5.27791 3.40344 5.09042 3.59086C4.90293 3.77828 4.7542 4.00081 4.65272 4.24572C4.55125 4.49064 4.49902 4.75314 4.49902 5.01824V17.1847C4.49902 17.4498 4.55125 17.7124 4.65272 17.9573C4.7542 18.2022 4.90293 18.4247 5.09042 18.6121C5.27791 18.7996 5.50049 18.9482 5.74544 19.0496C5.99039 19.151 6.25292 19.2031 6.51803 19.203H14.813C15.3483 19.203 15.8616 18.9904 16.2401 18.6119C16.6186 18.2334 16.8313 17.72 16.8313 17.1847V6.69375H14.9743Z", fill: "#0072FF" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8317 6.69375H14.9747C14.5647 6.69335 14.1716 6.53028 13.8816 6.24034C13.5917 5.95041 13.4286 5.55728 13.4282 5.14724V3L16.8317 6.69375Z", fill: "#0072FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2945 9.27977H6.5515C6.4771 9.27977 6.40576 9.25021 6.35316 9.19761C6.30055 9.145 6.271 9.07366 6.271 8.99927C6.2709 8.96237 6.27808 8.92581 6.29214 8.89169C6.30619 8.85757 6.32683 8.82656 6.35289 8.80043C6.37895 8.77431 6.4099 8.75358 6.44398 8.73944C6.47806 8.7253 6.5146 8.71802 6.5515 8.71802H14.2945C14.3691 8.71802 14.4406 8.74765 14.4934 8.8004C14.5461 8.85314 14.5757 8.92468 14.5757 8.99927C14.5755 9.07373 14.5458 9.14508 14.4931 9.19766C14.4404 9.25024 14.369 9.27977 14.2945 9.27977Z", fill: "#0072FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2945 10.9575H6.5515C6.4771 10.9575 6.40576 10.9279 6.35316 10.8753C6.30055 10.8227 6.271 10.7514 6.271 10.677C6.2709 10.6401 6.27808 10.6035 6.29214 10.5694C6.30619 10.5353 6.32683 10.5043 6.35289 10.4782C6.37895 10.452 6.4099 10.4313 6.44398 10.4172C6.47806 10.403 6.5146 10.3958 6.5515 10.3958H14.2945C14.3691 10.3958 14.4406 10.4254 14.4934 10.4781C14.5461 10.5309 14.5757 10.6024 14.5757 10.677C14.5755 10.7515 14.5458 10.8228 14.4931 10.8754C14.4404 10.928 14.369 10.9575 14.2945 10.9575Z", fill: "#0072FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2945 12.6353H6.5515C6.5146 12.6353 6.47806 12.628 6.44398 12.6139C6.4099 12.5997 6.37895 12.579 6.35289 12.5529C6.32683 12.5268 6.30619 12.4957 6.29214 12.4616C6.27808 12.4275 6.2709 12.3909 6.271 12.354C6.271 12.2797 6.30055 12.2083 6.35316 12.1557C6.40576 12.1031 6.4771 12.0735 6.5515 12.0735H14.2945C14.369 12.0735 14.4404 12.1031 14.4931 12.1557C14.5458 12.2082 14.5755 12.2796 14.5757 12.354C14.5757 12.4286 14.5461 12.5002 14.4934 12.5529C14.4406 12.6057 14.3691 12.6353 14.2945 12.6353Z", fill: "#0072FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.239 14.313H6.5515C6.5146 14.313 6.47806 14.3057 6.44398 14.2915C6.4099 14.2774 6.37895 14.2567 6.35289 14.2305C6.32683 14.2044 6.30619 14.1734 6.29214 14.1393C6.27808 14.1052 6.2709 14.0686 6.271 14.0317C6.271 13.9573 6.30055 13.886 6.35316 13.8334C6.40576 13.7808 6.4771 13.7512 6.5515 13.7512H11.239C11.3134 13.7512 11.3847 13.7808 11.4373 13.8334C11.4899 13.886 11.5195 13.9573 11.5195 14.0317C11.5196 14.0686 11.5124 14.1052 11.4984 14.1393C11.4843 14.1734 11.4637 14.2044 11.4376 14.2305C11.4115 14.2567 11.3806 14.2774 11.3465 14.2915C11.3124 14.3057 11.2759 14.313 11.239 14.313Z", fill: "#0072FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2954 15.82H8.91739C8.25216 15.82 7.71289 16.3593 7.71289 17.0245V19.8205C7.71289 20.4857 8.25216 21.025 8.91739 21.025H18.2954C18.9606 21.025 19.4999 20.4857 19.4999 19.8205V17.0245C19.4999 16.3593 18.9606 15.82 18.2954 15.82Z", fill: "#0072FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.2579 18.2043H16.8595C16.8481 18.139 16.8271 18.0811 16.7966 18.0307C16.7661 17.9795 16.7281 17.9362 16.6826 17.9007C16.6372 17.8652 16.5853 17.8386 16.5271 17.8208C16.4695 17.8023 16.4074 17.7931 16.3406 17.7931C16.222 17.7931 16.1169 17.8229 16.0253 17.8826C15.9337 17.9416 15.8619 18.0282 15.8101 18.1425C15.7583 18.2562 15.7323 18.395 15.7323 18.5591C15.7323 18.726 15.7583 18.8666 15.8101 18.981C15.8627 19.0946 15.9344 19.1805 16.0253 19.2388C16.1169 19.2963 16.2217 19.3251 16.3396 19.3251C16.4049 19.3251 16.466 19.3166 16.5228 19.2995C16.5803 19.2817 16.6318 19.2558 16.6773 19.2217C16.7235 19.1876 16.7622 19.1457 16.7934 19.096C16.8254 19.0463 16.8474 18.9895 16.8595 18.9256L17.2579 18.9277C17.243 19.0314 17.2107 19.1287 17.161 19.2196C17.1119 19.3105 17.0477 19.3908 16.9681 19.4604C16.8886 19.5293 16.7955 19.5832 16.689 19.6223C16.5825 19.6607 16.4642 19.6798 16.3343 19.6798C16.1425 19.6798 15.9713 19.6354 15.8208 19.5467C15.6702 19.4579 15.5516 19.3297 15.4649 19.1621C15.3783 18.9945 15.335 18.7935 15.335 18.5591C15.335 18.324 15.3786 18.123 15.466 17.9561C15.5534 17.7885 15.6723 17.6603 15.8229 17.5715C15.9735 17.4827 16.1439 17.4384 16.3343 17.4384C16.4557 17.4384 16.5686 17.4554 16.673 17.4895C16.7774 17.5236 16.8705 17.5737 16.9521 17.6397C17.0338 17.705 17.1009 17.7853 17.1535 17.8805C17.2068 17.9749 17.2416 18.0829 17.2579 18.2043Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.0167 18.5591C15.0167 18.7942 14.9727 18.9955 14.8846 19.1631C14.7972 19.33 14.6779 19.4579 14.5266 19.5467C14.3761 19.6354 14.2053 19.6798 14.0142 19.6798C13.8232 19.6798 13.652 19.6354 13.5007 19.5467C13.3501 19.4572 13.2308 19.329 13.1428 19.1621C13.0554 18.9945 13.0117 18.7935 13.0117 18.5591C13.0117 18.324 13.0554 18.123 13.1428 17.9561C13.2308 17.7885 13.3501 17.6603 13.5007 17.5715C13.652 17.4827 13.8232 17.4384 14.0142 17.4384C14.2053 17.4384 14.3761 17.4827 14.5266 17.5715C14.6779 17.6603 14.7972 17.7885 14.8846 17.9561C14.9727 18.123 15.0167 18.324 15.0167 18.5591ZM14.6193 18.5591C14.6193 18.3936 14.5934 18.2541 14.5415 18.1404C14.4904 18.0261 14.4194 17.9398 14.3285 17.8815C14.2376 17.8226 14.1328 17.7931 14.0142 17.7931C13.8956 17.7931 13.7908 17.8226 13.6999 17.8815C13.609 17.9398 13.5376 18.0261 13.4858 18.1404C13.4347 18.2541 13.4091 18.3936 13.4091 18.5591C13.4091 18.7246 13.4347 18.8645 13.4858 18.9788C13.5376 19.0925 13.609 19.1788 13.6999 19.2377C13.7908 19.296 13.8956 19.3251 14.0142 19.3251C14.1328 19.3251 14.2376 19.296 14.3285 19.2377C14.4194 19.1788 14.4904 19.0925 14.5415 18.9788C14.5934 18.8645 14.6193 18.7246 14.6193 18.5591Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.6329 19.65H10.8936V17.4682H11.6478C11.8644 17.4682 12.0505 17.5119 12.2061 17.5992C12.3623 17.6859 12.4823 17.8105 12.5661 17.9732C12.6499 18.1358 12.6919 18.3304 12.6919 18.557C12.6919 18.7843 12.6496 18.9796 12.5651 19.1429C12.4813 19.3063 12.3602 19.4316 12.2018 19.519C12.0441 19.6063 11.8545 19.65 11.6329 19.65ZM11.2888 19.308H11.6137C11.7657 19.308 11.8925 19.2803 11.9941 19.2249C12.0956 19.1688 12.172 19.0854 12.2231 18.9746C12.2742 18.8631 12.2998 18.7239 12.2998 18.557C12.2998 18.3901 12.2742 18.2516 12.2231 18.1415C12.172 18.0307 12.0963 17.948 11.9962 17.8933C11.8968 17.8379 11.7732 17.8102 11.6254 17.8102H11.2888V19.308Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.2437 19.6735C10.179 19.6735 10.1236 19.6507 10.0775 19.6053C10.0313 19.5598 10.0086 19.5044 10.0093 19.4391C10.0086 19.3752 10.0313 19.3205 10.0775 19.275C10.1236 19.2296 10.179 19.2068 10.2437 19.2068C10.3062 19.2068 10.3605 19.2296 10.4067 19.275C10.4535 19.3205 10.4773 19.3752 10.478 19.4391C10.4773 19.4824 10.466 19.5218 10.444 19.5573C10.4226 19.5929 10.3942 19.6213 10.3587 19.6426C10.3239 19.6632 10.2856 19.6735 10.2437 19.6735Z", fill: "white" })
      ]
    }
  )
);
FileDoc.displayName = "FileDoc";
var FileDoc_default = FileDoc;
var FileHtml = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.8698 6.99471C14.4597 6.99432 14.0665 6.83128 13.7764 6.54136C13.4863 6.25145 13.3231 5.85831 13.3225 5.44821V3.30096H6.41277C5.8775 3.30096 5.36415 3.51361 4.98565 3.8921C4.60716 4.2706 4.39453 4.78393 4.39453 5.31921V17.4857C4.39453 18.021 4.60716 18.5343 4.98565 18.9128C5.36415 19.2913 5.8775 19.504 6.41277 19.504H14.7078C15.2431 19.504 15.7564 19.2913 16.1349 18.9128C16.5134 18.5343 16.726 18.021 16.726 17.4857V6.99471H14.8698Z", fill: "#344054" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.7262 6.99549H14.8692C14.4592 6.99509 14.0661 6.83203 13.7761 6.54209C13.4862 6.25215 13.3232 5.85902 13.3228 5.44899V3.30249L16.7262 6.99549Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.4332 9.20524C11.4939 9.20326 11.5535 9.22298 11.6002 9.26188C11.6206 9.27795 11.6366 9.29907 11.648 9.32243C11.6594 9.34577 11.6654 9.37165 11.6656 9.39762C11.5879 9.62391 11.4967 9.84552 11.3921 10.0607L11.3414 10.1701L10.9527 11.0197L10.4361 12.1672L10.2535 12.5656L10.2164 12.6564C10.2033 12.6929 10.1874 12.7286 10.1675 12.7619C10.14 12.8032 10.102 12.8363 10.0582 12.8595C10.0142 12.8828 9.96526 12.8952 9.91559 12.8947L9.68609 12.8908C9.62571 12.8928 9.56632 12.8721 9.52008 12.8332C9.49959 12.8172 9.4828 12.7969 9.47125 12.7736C9.45967 12.7503 9.45394 12.7245 9.45367 12.6984C9.45367 12.6615 9.56328 12.4067 9.78277 11.9211L10.1031 11.217L10.1714 11.0705L10.688 9.92399L10.8707 9.52653L10.9078 9.43473C10.9219 9.40126 10.9383 9.3688 10.9576 9.33805C10.9831 9.29609 11.0198 9.26182 11.063 9.23844C11.1064 9.21506 11.1554 9.20356 11.2046 9.20524H11.4332ZM12.1275 9.76481C12.1358 9.76337 12.1446 9.76335 12.1529 9.76481L12.1724 9.77458C12.1761 9.77703 12.218 9.78934 12.2964 9.8195L12.6578 9.96501C12.6757 9.97203 12.8696 10.0534 13.2398 10.2082C13.4618 10.2994 13.7167 10.4075 14.0035 10.5324C14.0219 10.5382 14.0466 10.5481 14.0777 10.5597L14.1822 10.6017C14.2436 10.6236 14.3033 10.6505 14.3599 10.6828C14.4008 10.7012 14.4364 10.7315 14.4615 10.7687C14.4863 10.8058 14.4998 10.8491 14.5015 10.8937V11.1945C14.5011 11.2358 14.4882 11.2767 14.4634 11.3097C14.4366 11.3476 14.4008 11.3784 14.3599 11.4006C14.3055 11.4277 14.2394 11.4574 14.1656 11.4884L13.9713 11.5656L12.2798 12.2736C12.2313 12.2979 12.2017 12.3137 12.1929 12.3195L12.1744 12.3332L12.0855 12.341C12.0547 12.3429 12.0237 12.3388 11.9947 12.3283C11.9656 12.3178 11.939 12.3007 11.9166 12.2795C11.8979 12.2614 11.8828 12.2399 11.8726 12.216C11.8624 12.192 11.857 12.1659 11.857 12.1398V11.8937C11.8566 11.8489 11.8703 11.8044 11.8961 11.7677C11.925 11.7272 11.9656 11.6964 12.0123 11.6789L13.5484 11.0519L12.0123 10.4259C11.9656 10.4053 11.926 10.371 11.898 10.3283C11.8723 10.2912 11.8578 10.2474 11.857 10.2023V9.95231C11.857 9.92633 11.8631 9.89989 11.8736 9.87614C11.8841 9.85253 11.8994 9.83101 11.9185 9.81364C11.9643 9.77296 12.0243 9.75224 12.0855 9.75504C12.1 9.75469 12.1146 9.75808 12.1275 9.76481ZM9.03863 9.75993C9.06871 9.75837 9.09916 9.76343 9.1275 9.7736C9.15569 9.78373 9.18154 9.79932 9.20367 9.8195C9.2222 9.83741 9.23745 9.8593 9.24762 9.88297C9.25765 9.90646 9.26297 9.93166 9.26324 9.95719V10.2043C9.26236 10.2502 9.24759 10.2946 9.22125 10.3322C9.19482 10.3746 9.1551 10.4073 9.10797 10.424L7.57672 11.05L9.10797 11.6769C9.15329 11.6955 9.19251 11.7261 9.22125 11.7658C9.24853 11.8017 9.26344 11.8457 9.26324 11.8908V12.1379C9.26265 12.1905 9.24104 12.2405 9.20367 12.2775C9.18185 12.2985 9.15587 12.3148 9.1275 12.3254C9.09917 12.3358 9.06879 12.3407 9.03863 12.339C9.02325 12.3389 9.00806 12.3358 8.99371 12.3302L8.9527 12.3166L8.82477 12.2707L8.46832 12.1242L7.88531 11.882L7.13531 11.5666L6.94781 11.4894C6.88663 11.4651 6.82441 11.4375 6.76031 11.4064C6.72065 11.388 6.68656 11.3594 6.66168 11.3234C6.63674 11.2872 6.62176 11.2442 6.61871 11.2004V10.9025C6.61765 10.8607 6.63089 10.8199 6.65582 10.7863C6.68527 10.7485 6.72032 10.7151 6.76031 10.6886C6.82075 10.6571 6.88358 10.6304 6.94781 10.6076L7.13531 10.5295L7.88531 10.214C7.98958 10.1655 8.18417 10.0841 8.46832 9.97086L8.82477 9.82536L8.9527 9.77946L8.97516 9.76969C8.98111 9.7684 8.98777 9.76835 8.99371 9.76969C9.00784 9.76343 9.02318 9.75993 9.03863 9.75993Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8857 19.65V17.4682H17.281V19.3187H18.2419V19.65H16.8857Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.167 17.4682H14.6507L15.2984 19.0492H15.324L15.9717 17.4682H16.4553V19.65H16.0761V18.1511H16.0558L15.4529 19.6436H15.1695L14.5665 18.1479H14.5463V19.65H14.167V17.4682Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.0903 17.7995V17.4682H13.8311V17.7995H13.1567V19.65H12.7647V17.7995H12.0903Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.9541 19.65V17.4682H10.3493V18.3919H11.3604V17.4682H11.7567V19.65H11.3604V18.7232H10.3493V19.65H9.9541Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.30422 19.6735C9.23958 19.6735 9.18419 19.6507 9.13802 19.6053C9.09186 19.5598 9.06913 19.5044 9.06984 19.4391C9.06913 19.3752 9.09186 19.3205 9.13802 19.275C9.18419 19.2296 9.23958 19.2068 9.30422 19.2068C9.36672 19.2068 9.42105 19.2296 9.46721 19.275C9.51409 19.3205 9.53788 19.3752 9.53859 19.4391C9.53788 19.4824 9.52652 19.5218 9.5045 19.5573C9.48319 19.5929 9.45478 19.6213 9.41927 19.6426C9.38447 19.6632 9.34612 19.6735 9.30422 19.6735Z", fill: "white" })
      ]
    }
  )
);
FileHtml.displayName = "FileHtml";
var FileHtml_default = FileHtml;
var FileMd = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9762 6.69375C14.5661 6.69335 14.1729 6.53032 13.8828 6.2404C13.5928 5.95048 13.4296 5.55735 13.429 5.14724V3H6.51922C5.98395 3 5.47059 3.21264 5.0921 3.59114C4.7136 3.96963 4.50098 4.48297 4.50098 5.01824V17.1847C4.50098 17.72 4.7136 18.2334 5.0921 18.6119C5.47059 18.9904 5.98395 19.203 6.51922 19.203H14.8142C15.3495 19.203 15.8628 18.9904 16.2413 18.6119C16.6198 18.2334 16.8325 17.72 16.8325 17.1847V6.69375H14.9762Z", fill: "#344054" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8322 6.69375H14.976C14.5659 6.69335 14.1727 6.53032 13.8826 6.2404C13.5925 5.95048 13.4293 5.55735 13.4287 5.14724V3L16.8322 6.69375Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 9.27977H6.55198C6.47765 9.27957 6.40642 9.24995 6.35386 9.19739C6.3013 9.14483 6.27168 9.0736 6.27148 8.99927C6.27148 8.92481 6.30101 8.85338 6.35359 8.80065C6.40617 8.74793 6.47752 8.71822 6.55198 8.71802H14.2957C14.3702 8.71822 14.4415 8.74793 14.4941 8.80065C14.5467 8.85338 14.5762 8.92481 14.5762 8.99927C14.576 9.0736 14.5464 9.14483 14.4939 9.19739C14.4413 9.24995 14.3701 9.27957 14.2957 9.27977Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 10.9575H6.55198C6.47765 10.9573 6.40642 10.9277 6.35386 10.8751C6.3013 10.8226 6.27168 10.7513 6.27148 10.677C6.27148 10.6025 6.30101 10.5311 6.35359 10.4784C6.40617 10.4257 6.47752 10.396 6.55198 10.3958H14.2957C14.3702 10.396 14.4415 10.4257 14.4941 10.4784C14.5467 10.5311 14.5762 10.6025 14.5762 10.677C14.576 10.7513 14.5464 10.8226 14.4939 10.8751C14.4413 10.9277 14.3701 10.9573 14.2957 10.9575Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 12.6353H6.55198C6.47752 12.6351 6.40617 12.6054 6.35359 12.5527C6.30101 12.4999 6.27148 12.4285 6.27148 12.354C6.27168 12.2797 6.3013 12.2085 6.35386 12.1559C6.40642 12.1034 6.47765 12.0737 6.55198 12.0735H14.2957C14.3701 12.0737 14.4413 12.1034 14.4939 12.1559C14.5464 12.2085 14.576 12.2797 14.5762 12.354C14.5762 12.4285 14.5467 12.4999 14.4941 12.5527C14.4415 12.6054 14.3702 12.6351 14.2957 12.6353Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 14.3122H6.55198C6.47759 14.3122 6.40625 14.2827 6.35364 14.2301C6.30104 14.1775 6.27148 14.1061 6.27148 14.0317C6.27148 13.9573 6.30101 13.8858 6.35359 13.8331C6.40617 13.7804 6.47752 13.7507 6.55198 13.7505H14.2957C14.3702 13.7507 14.4415 13.7804 14.4941 13.8331C14.5467 13.8858 14.5762 13.9573 14.5762 14.0317C14.5762 14.1061 14.5467 14.1775 14.4941 14.2301C14.4415 14.2827 14.3701 14.3122 14.2957 14.3122Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.2813 19.65H14.542V17.4682H15.2963C15.5129 17.4682 15.699 17.5119 15.8545 17.5992C16.0107 17.6859 16.1308 17.8105 16.2146 17.9732C16.2984 18.1358 16.3403 18.3304 16.3403 18.557C16.3403 18.7843 16.298 18.9796 16.2135 19.1429C16.1297 19.3063 16.0086 19.4316 15.8502 19.519C15.6926 19.6063 15.5029 19.65 15.2813 19.65ZM14.9372 19.308H15.2622C15.4142 19.308 15.5409 19.2803 15.6425 19.2249C15.7441 19.1688 15.8204 19.0854 15.8715 18.9746C15.9227 18.8631 15.9482 18.7239 15.9482 18.557C15.9482 18.3901 15.9227 18.2516 15.8715 18.1415C15.8204 18.0307 15.7448 17.948 15.6446 17.8933C15.5452 17.8379 15.4216 17.8102 15.2739 17.8102H14.9372V19.308Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.8232 17.4682H12.3069L12.9546 19.0492H12.9802L13.6279 17.4682H14.1116V19.65H13.7323V18.1511H13.7121L13.1091 19.6436H12.8257L12.2227 18.1479H12.2025V19.65H11.8232V17.4682Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.1734 19.6735C11.1087 19.6735 11.0533 19.6507 11.0072 19.6053C10.961 19.5598 10.9383 19.5044 10.939 19.4391C10.9383 19.3752 10.961 19.3205 11.0072 19.275C11.0533 19.2296 11.1087 19.2068 11.1734 19.2068C11.2359 19.2068 11.2902 19.2296 11.3364 19.275C11.3832 19.3205 11.407 19.3752 11.4077 19.4391C11.407 19.4824 11.3957 19.5218 11.3736 19.5573C11.3523 19.5929 11.3239 19.6213 11.2884 19.6426C11.2536 19.6632 11.2153 19.6735 11.1734 19.6735Z", fill: "white" })
      ]
    }
  )
);
FileMd.displayName = "FileMd";
var FileMd_default = FileMd;
var FilePptx = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9772 6.69375C14.5672 6.69335 14.174 6.53028 13.8841 6.24034C13.5942 5.95041 13.4311 5.55728 13.4307 5.14724V3H6.5202C5.98492 3 5.47159 3.21264 5.09309 3.59114C4.7146 3.96963 4.50195 4.48297 4.50195 5.01824V17.1847C4.50195 17.72 4.7146 18.2334 5.09309 18.6119C5.47159 18.9904 5.98492 19.203 6.5202 19.203H14.8152C15.0803 19.2031 15.3428 19.151 15.5878 19.0496C15.8327 18.9482 16.0553 18.7996 16.2428 18.6121C16.4303 18.4247 16.579 18.2022 16.6805 17.9573C16.782 17.7124 16.8342 17.4498 16.8342 17.1847V6.69375H14.9772Z", fill: "#FF3E4C" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8337 6.69375H14.9767C14.5666 6.69335 14.1735 6.53028 13.8836 6.24034C13.5936 5.95041 13.4306 5.55728 13.4302 5.14724V3L16.8337 6.69375Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2924 15.82H8.91445C8.24922 15.82 7.70996 16.3593 7.70996 17.0245V19.8205C7.70996 20.4857 8.24922 21.025 8.91445 21.025H18.2924C18.9577 21.025 19.497 20.4857 19.497 19.8205V17.0245C19.497 16.3593 18.9577 15.82 18.2924 15.82Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.4857 17.4682L16.9662 18.2672H16.9832L17.4658 17.4682H17.9165L17.2442 18.5591L17.9271 19.65H17.469L16.9832 18.8563H16.9662L16.4804 19.65H16.0244L16.7137 18.5591L16.0329 17.4682H16.4857Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.0791 17.7995V17.4682H15.8199V17.7995H15.1455V19.65H14.7535V17.7995H14.0791Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.2446 19.65V17.4682H13.0628C13.2304 17.4682 13.371 17.4995 13.4847 17.562C13.599 17.6245 13.6853 17.7104 13.7436 17.8198C13.8025 17.9284 13.832 18.052 13.832 18.1905C13.832 18.3304 13.8025 18.4547 13.7436 18.5634C13.6846 18.672 13.5976 18.7576 13.4826 18.8201C13.3675 18.8819 13.2258 18.9128 13.0575 18.9128H12.5152V18.5879H13.0042C13.1022 18.5879 13.1825 18.5708 13.245 18.5367C13.3075 18.5026 13.3536 18.4558 13.3835 18.3961C13.414 18.3365 13.4293 18.2679 13.4293 18.1905C13.4293 18.1131 13.414 18.0449 13.3835 17.986C13.3536 17.927 13.3071 17.8812 13.2439 17.8485C13.1814 17.8151 13.1008 17.7985 13.0021 17.7985H12.6399V19.65H12.2446Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.314 19.65V17.4682H11.1321C11.2998 17.4682 11.4404 17.4995 11.554 17.562C11.6684 17.6245 11.7547 17.7104 11.8129 17.8198C11.8718 17.9284 11.9013 18.052 11.9013 18.1905C11.9013 18.3304 11.8718 18.4547 11.8129 18.5634C11.754 18.672 11.6669 18.7576 11.5519 18.8201C11.4368 18.8819 11.2951 18.9128 11.1268 18.9128H10.5846V18.5879H11.0736C11.1716 18.5879 11.2518 18.5708 11.3143 18.5367C11.3768 18.5026 11.423 18.4558 11.4528 18.3961C11.4834 18.3365 11.4986 18.2679 11.4986 18.1905C11.4986 18.1131 11.4834 18.0449 11.4528 17.986C11.423 17.927 11.3765 17.8812 11.3133 17.8485C11.2508 17.8151 11.1701 17.7985 11.0714 17.7985H10.7092V19.65H10.314Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.66408 19.6734C9.59945 19.6734 9.54405 19.6507 9.49789 19.6052C9.45172 19.5598 9.42899 19.5044 9.4297 19.439C9.42899 19.3751 9.45172 19.3204 9.49789 19.275C9.54405 19.2295 9.59945 19.2068 9.66408 19.2068C9.72658 19.2068 9.78091 19.2295 9.82708 19.275C9.87395 19.3204 9.89774 19.3751 9.89845 19.439C9.89774 19.4824 9.88638 19.5218 9.86436 19.5573C9.84306 19.5928 9.81465 19.6212 9.77914 19.6425C9.74433 19.6631 9.70598 19.6734 9.66408 19.6734Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1029 9.27977H6.82617C6.75171 9.27977 6.68028 9.25024 6.62756 9.19766C6.57483 9.14508 6.54512 9.07373 6.54492 8.99927C6.54492 8.92468 6.57456 8.85314 6.6273 8.8004C6.68005 8.74765 6.75158 8.71802 6.82617 8.71802H10.0999C10.1745 8.71802 10.2461 8.74765 10.2988 8.8004C10.3515 8.85314 10.3812 8.92468 10.3812 8.99927C10.381 9.07321 10.3517 9.1441 10.2996 9.1966C10.2475 9.2491 10.1769 9.27898 10.1029 9.27977Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1029 10.9575H6.82617C6.75171 10.9575 6.68028 10.928 6.62756 10.8754C6.57483 10.8228 6.54512 10.7515 6.54492 10.677C6.54492 10.6024 6.57456 10.5309 6.6273 10.4781C6.68005 10.4254 6.75158 10.3958 6.82617 10.3958H10.0999C10.1745 10.3958 10.2461 10.4254 10.2988 10.4781C10.3515 10.5309 10.3812 10.6024 10.3812 10.677C10.381 10.7509 10.3517 10.8218 10.2996 10.8743C10.2475 10.9268 10.1769 10.9567 10.1029 10.9575Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1029 12.6353H6.82617C6.75158 12.6353 6.68005 12.6056 6.6273 12.5529C6.57456 12.5001 6.54492 12.4286 6.54492 12.354C6.54552 12.2798 6.57541 12.2088 6.62809 12.1566C6.68077 12.1043 6.75197 12.075 6.82617 12.075H10.0999C10.1744 12.075 10.2458 12.1045 10.2985 12.1571C10.3513 12.2097 10.381 12.281 10.3812 12.3555C10.3808 12.4293 10.3514 12.5 10.2993 12.5524C10.2473 12.6047 10.1767 12.6345 10.1029 12.6353Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1029 14.313H6.82617C6.75158 14.313 6.68005 14.2833 6.6273 14.2306C6.57456 14.1778 6.54492 14.1063 6.54492 14.0317C6.54512 13.9573 6.57483 13.8859 6.62756 13.8333C6.68028 13.7807 6.75171 13.7512 6.82617 13.7512H10.0999C10.1744 13.7512 10.2458 13.7807 10.2985 13.8333C10.3513 13.8859 10.381 13.9573 10.3812 14.0317C10.3812 14.1058 10.352 14.1769 10.2999 14.2295C10.2478 14.2822 10.177 14.3122 10.1029 14.313Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.2949 11.85V9.35699C12.6876 9.38907 12.1157 9.65289 11.6971 10.0941C11.2784 10.5353 11.045 11.1203 11.0449 11.7285C11.0448 12.0403 11.1062 12.3492 11.2255 12.6373C11.3448 12.9254 11.5197 13.1872 11.7402 13.4077C11.9607 13.6283 12.2225 13.8032 12.5106 13.9225C12.7988 14.0417 13.1076 14.1031 13.4194 14.103C14.0276 14.1031 14.6126 13.8697 15.0537 13.451C15.4949 13.0324 15.7585 12.4603 15.7902 11.853L13.2949 11.85Z", fill: "#FF3E4C" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.7495 9.1673V11.4173H15.9995C15.9695 10.8303 15.7228 10.2753 15.3071 9.85967C14.8915 9.44405 14.3365 9.19735 13.7495 9.1673Z", fill: "#FF3E4C" })
      ]
    }
  )
);
FilePptx.displayName = "FilePptx";
var FilePptx_default = FilePptx;
var FileTxt2 = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9762 6.69375C14.5661 6.69335 14.1729 6.53032 13.8828 6.2404C13.5928 5.95048 13.4296 5.55735 13.429 5.14724V3H6.51922C5.98395 3 5.47059 3.21264 5.0921 3.59114C4.7136 3.96963 4.50098 4.48297 4.50098 5.01824V17.1847C4.50098 17.72 4.7136 18.2334 5.0921 18.6119C5.47059 18.9904 5.98395 19.203 6.51922 19.203H14.8142C15.3495 19.203 15.8628 18.9904 16.2413 18.6119C16.6198 18.2334 16.8325 17.72 16.8325 17.1847V6.69375H14.9762Z", fill: "#344054" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8322 6.69375H14.976C14.5659 6.69335 14.1727 6.53032 13.8826 6.2404C13.5925 5.95048 13.4293 5.55735 13.4287 5.14724V3L16.8322 6.69375Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 9.27977H6.55198C6.47765 9.27957 6.40642 9.24995 6.35386 9.19739C6.3013 9.14483 6.27168 9.0736 6.27148 8.99927C6.27148 8.92481 6.30101 8.85338 6.35359 8.80065C6.40617 8.74793 6.47752 8.71822 6.55198 8.71802H14.2957C14.3702 8.71822 14.4415 8.74793 14.4941 8.80065C14.5467 8.85338 14.5762 8.92481 14.5762 8.99927C14.576 9.0736 14.5464 9.14483 14.4939 9.19739C14.4413 9.24995 14.3701 9.27957 14.2957 9.27977Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 10.9575H6.55198C6.47765 10.9573 6.40642 10.9277 6.35386 10.8751C6.3013 10.8226 6.27168 10.7513 6.27148 10.677C6.27148 10.6025 6.30101 10.5311 6.35359 10.4784C6.40617 10.4257 6.47752 10.396 6.55198 10.3958H14.2957C14.3702 10.396 14.4415 10.4257 14.4941 10.4784C14.5467 10.5311 14.5762 10.6025 14.5762 10.677C14.576 10.7513 14.5464 10.8226 14.4939 10.8751C14.4413 10.9277 14.3701 10.9573 14.2957 10.9575Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 12.6353H6.55198C6.47752 12.6351 6.40617 12.6054 6.35359 12.5527C6.30101 12.4999 6.27148 12.4285 6.27148 12.354C6.27168 12.2797 6.3013 12.2085 6.35386 12.1559C6.40642 12.1034 6.47765 12.0737 6.55198 12.0735H14.2957C14.3701 12.0737 14.4413 12.1034 14.4939 12.1559C14.5464 12.2085 14.576 12.2797 14.5762 12.354C14.5762 12.4285 14.5467 12.4999 14.4941 12.5527C14.4415 12.6054 14.3702 12.6351 14.2957 12.6353Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2957 14.3122H6.55198C6.47759 14.3122 6.40625 14.2827 6.35364 14.2301C6.30104 14.1775 6.27148 14.1061 6.27148 14.0317C6.27148 13.9573 6.30101 13.8858 6.35359 13.8331C6.40617 13.7804 6.47752 13.7507 6.55198 13.7505H14.2957C14.3702 13.7507 14.4415 13.7804 14.4941 13.8331C14.5467 13.8858 14.5762 13.9573 14.5762 14.0317C14.5762 14.1061 14.5467 14.1775 14.4941 14.2301C14.4415 14.2827 14.3701 14.3122 14.2957 14.3122Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#344054" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15.1577 17.7995V17.4682H16.8985V17.7995H16.2241V19.65H15.8321V17.7995H15.1577Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5126 17.4682L13.993 18.2672H14.0101L14.4927 17.4682H14.9433L14.2711 18.5591L14.954 19.65H14.4959L14.0101 18.8563H13.993L13.5072 19.65H13.0513L13.7405 18.5591L13.0598 17.4682H13.5126Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.106 17.7995V17.4682H12.8467V17.7995H12.1724V19.65H11.7803V17.7995H11.106Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.6548 19.6735C10.5902 19.6735 10.5348 19.6507 10.4886 19.6053C10.4424 19.5598 10.4197 19.5044 10.4204 19.4391C10.4197 19.3752 10.4424 19.3205 10.4886 19.275C10.5348 19.2296 10.5902 19.2068 10.6548 19.2068C10.7173 19.2068 10.7716 19.2296 10.8178 19.275C10.8647 19.3205 10.8885 19.3752 10.8892 19.4391C10.8885 19.4824 10.8771 19.5218 10.8551 19.5573C10.8338 19.5929 10.8054 19.6213 10.7699 19.6426C10.7351 19.6632 10.6967 19.6735 10.6548 19.6735Z", fill: "white" })
      ]
    }
  )
);
FileTxt2.displayName = "FileTxt";
var FileTxt_default2 = FileTxt2;
var FileVideo2 = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9753 7.193C14.5652 7.19261 14.1721 7.02955 13.8822 6.73961C13.5922 6.44967 13.4292 6.05654 13.4288 5.6465V3.5H6.51825C5.9831 3.5 5.46987 3.71253 5.09139 4.09087C4.71292 4.4692 4.5002 4.98236 4.5 5.5175V17.684C4.5006 18.2189 4.71349 18.7317 5.09193 19.1097C5.47036 19.4877 5.98336 19.7 6.51825 19.7H14.8133C15.0784 19.7001 15.3409 19.648 15.5858 19.5466C15.8308 19.4452 16.0534 19.2966 16.2409 19.1092C16.4284 18.9217 16.5771 18.6992 16.6786 18.4543C16.78 18.2094 16.8323 17.9469 16.8323 17.6818V7.193H14.9753Z", fill: "#A140FF" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8322 7.193H14.9752C14.5652 7.19261 14.172 7.02955 13.8821 6.73961C13.5922 6.44967 13.4291 6.05654 13.4287 5.6465V3.5L16.8322 7.193Z", fill: "#A140FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.5992 13.6676V8.62745C14.5989 8.60298 14.5965 8.57859 14.5918 8.55456C14.5907 8.54738 14.5889 8.54031 14.5865 8.53343C14.5827 8.51691 14.5778 8.50067 14.5717 8.48483C14.569 8.4776 14.5658 8.47055 14.5622 8.46371C14.5558 8.44829 14.548 8.43344 14.539 8.41934L14.5284 8.40244C14.5151 8.3833 14.5003 8.36528 14.4841 8.34856L14.4767 8.34222C14.4623 8.32867 14.4471 8.31598 14.4312 8.30419L14.4122 8.29257L14.37 8.26933L14.3478 8.25982C14.3312 8.25343 14.3143 8.24814 14.2971 8.24398H14.2802C14.2562 8.2389 14.2318 8.23642 14.2073 8.23658H7.09126C6.99346 8.24553 6.90251 8.29068 6.83626 8.36318C6.77002 8.43568 6.73324 8.53031 6.73312 8.62851C6.73312 8.63485 6.73312 8.64013 6.73312 8.64647V13.6856C6.73057 13.7504 6.75117 13.8141 6.79123 13.8652C6.82588 13.9237 6.87518 13.9722 6.93427 14.0059C6.99336 14.0396 7.06019 14.0574 7.12822 14.0574H14.2062C14.3097 14.0569 14.4089 14.0157 14.4824 13.9428C14.5559 13.87 14.5978 13.7711 14.5992 13.6676ZM7.1578 9.18524V8.42039H7.78002V9.18524H7.1578ZM8.20787 9.18524V8.42039H8.83012V9.18524H8.20787ZM9.25795 9.18524V8.42039H9.88019V9.18524H9.25795ZM10.308 9.18524V8.42039H10.9303V9.18524H10.308ZM11.3581 9.18524V8.42039H11.9803V9.18524H11.3581ZM12.4082 9.18524V8.42039H13.0304V9.18524H12.4082ZM13.4583 9.18524V8.42039H14.0805V9.18524H13.4583ZM7.01412 12.8943V9.3923H14.3277V12.8943H7.01412ZM7.15675 13.8652V13.1003H7.77896V13.8652H7.15675ZM8.20682 13.8652V13.1003H8.82906V13.8652H8.20682ZM9.25692 13.8652V13.1003H9.87913V13.8652H9.25692ZM10.307 13.8652V13.1003H10.9292V13.8652H10.307ZM11.3571 13.8652V13.1003H11.9793V13.8652H11.3571ZM12.4071 13.8652V13.1003H13.0294V13.8652H12.4071ZM13.4572 13.8652V13.1003H14.0794V13.8652H13.4572Z", fill: "#A140FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.2669 10.9603L10.5491 10.5455C10.512 10.5242 10.4699 10.5131 10.4271 10.5132C10.3843 10.5133 10.3423 10.5246 10.3053 10.546C10.2682 10.5674 10.2374 10.5982 10.216 10.6352C10.1946 10.6722 10.1832 10.7142 10.1831 10.757V11.5865C10.1832 11.6293 10.1946 11.6713 10.216 11.7083C10.2374 11.7454 10.2682 11.7761 10.3053 11.7975C10.3423 11.8189 10.3843 11.8303 10.4271 11.8303C10.4699 11.8304 10.512 11.8193 10.5491 11.798L11.2669 11.3833C11.3039 11.3618 11.3347 11.3309 11.356 11.2938C11.3774 11.2567 11.3887 11.2146 11.3887 11.1718C11.3887 11.1289 11.3774 11.0868 11.356 11.0497C11.3347 11.0126 11.3039 10.9818 11.2669 10.9603Z", fill: "#A140FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#A140FF" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.2893 18.4173C17.2893 18.6114 17.2538 18.7783 17.1828 18.918C17.1118 19.0571 17.0144 19.1642 16.8907 19.2394C16.7676 19.3139 16.6276 19.3512 16.4708 19.3512C16.3134 19.3512 16.1728 19.3139 16.0491 19.2394C15.926 19.1642 15.8289 19.0568 15.7579 18.9171C15.6869 18.7774 15.6514 18.6108 15.6514 18.4173C15.6514 18.2232 15.6869 18.0566 15.7579 17.9175C15.8289 17.7778 15.926 17.6707 16.0491 17.5961C16.1728 17.5209 16.3134 17.4833 16.4708 17.4833C16.6276 17.4833 16.7676 17.5209 16.8907 17.5961C17.0144 17.6707 17.1118 17.7778 17.1828 17.9175C17.2538 18.0566 17.2893 18.2232 17.2893 18.4173ZM17.0177 18.4173C17.0177 18.2693 16.9937 18.1447 16.9458 18.0435C16.8984 17.9417 16.8333 17.8648 16.7504 17.8127C16.6682 17.76 16.575 17.7337 16.4708 17.7337C16.366 17.7337 16.2725 17.76 16.1903 17.8127C16.108 17.8648 16.0429 17.9417 15.9949 18.0435C15.9476 18.1447 15.9239 18.2693 15.9239 18.4173C15.9239 18.5653 15.9476 18.6901 15.9949 18.7919C16.0429 18.8931 16.108 18.9701 16.1903 19.0228C16.2725 19.0748 16.366 19.1009 16.4708 19.1009C16.575 19.1009 16.6682 19.0748 16.7504 19.0228C16.8333 18.9701 16.8984 18.8931 16.9458 18.7919C16.9937 18.6901 17.0177 18.5653 17.0177 18.4173Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.2036 19.3264V17.5082H15.3435V17.7443H14.4779V18.2983H15.284V18.5336H14.4779V19.0902H15.3542V19.3264H14.2036Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.988 19.3264H12.3994V17.5082H13.0067C13.1848 17.5082 13.3378 17.5446 13.4656 17.6174C13.5935 17.6896 13.6914 17.7935 13.7595 17.929C13.8282 18.0639 13.8625 18.2258 13.8625 18.4146C13.8625 18.604 13.8279 18.7668 13.7586 18.9029C13.69 19.039 13.5905 19.1438 13.4603 19.2172C13.3301 19.29 13.1727 19.3264 12.988 19.3264ZM12.6737 19.0867H12.9729C13.1114 19.0867 13.2265 19.0606 13.3183 19.0085C13.41 18.9559 13.4787 18.8798 13.5242 18.7804C13.5698 18.6803 13.5926 18.5584 13.5926 18.4146C13.5926 18.272 13.5698 18.1509 13.5242 18.0515C13.4793 17.9521 13.4121 17.8766 13.3227 17.8251C13.2333 17.7736 13.1224 17.7479 12.9898 17.7479H12.6737V19.0867Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.9999 17.5082V19.3264H11.7256V17.5082H11.9999Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1339 17.5082L10.64 18.989H10.6604L11.1664 17.5082H11.4629L10.8086 19.3264H10.4917L9.8374 17.5082H10.1339Z", fill: "white" })
      ]
    }
  )
);
FileVideo2.displayName = "FileVideo";
var FileVideo_default2 = FileVideo2;
var FileXls = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("g", { opacity: "0.3", children: /* @__PURE__ */ jsxRuntime.jsx("path", { opacity: "0.3", d: "M14.9733 6.69375C14.5633 6.69335 14.1701 6.53028 13.8802 6.24034C13.5903 5.95041 13.4272 5.55728 13.4268 5.14724V3H6.51631C5.98104 3 5.46768 3.21264 5.08918 3.59114C4.71069 3.96963 4.49805 4.48297 4.49805 5.01824V17.1847C4.49805 17.72 4.71069 18.2334 5.08918 18.6119C5.46768 18.9904 5.98104 19.203 6.51631 19.203H14.8113C15.3466 19.203 15.8599 18.9904 16.2384 18.6119C16.6169 18.2334 16.8296 17.72 16.8296 17.1847V6.69375H14.9733Z", fill: "#00C650" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.8305 6.69375H14.9742C14.5642 6.69335 14.1711 6.53028 13.8811 6.24034C13.5912 5.95041 13.4281 5.55728 13.4277 5.14724V3L16.8305 6.69375Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.2925 15.825H8.91447C8.24924 15.825 7.70996 16.3642 7.70996 17.0295V19.8255C7.70996 20.4907 8.24924 21.03 8.91447 21.03H18.2925C18.9577 21.03 19.497 20.4907 19.497 19.8255V17.0295C19.497 16.3642 18.9577 15.825 18.2925 15.825Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.3647 18.068C16.3547 17.9749 16.3128 17.9025 16.2389 17.8506C16.1658 17.7988 16.0706 17.7729 15.9534 17.7729C15.871 17.7729 15.8004 17.7853 15.7414 17.8102C15.6825 17.835 15.6374 17.8688 15.6061 17.9114C15.5749 17.954 15.5589 18.0026 15.5582 18.0573C15.5582 18.1028 15.5685 18.1422 15.5891 18.1756C15.6104 18.209 15.6392 18.2374 15.6754 18.2608C15.7116 18.2835 15.7517 18.3027 15.7958 18.3183C15.8398 18.334 15.8842 18.3471 15.9289 18.3577L16.1335 18.4089C16.2159 18.4281 16.2951 18.454 16.371 18.4866C16.4478 18.5193 16.5163 18.5605 16.5767 18.6102C16.6377 18.6599 16.686 18.72 16.7215 18.7903C16.7571 18.8606 16.7748 18.943 16.7748 19.0374C16.7748 19.1653 16.7421 19.2778 16.6768 19.3751C16.6115 19.4717 16.517 19.5474 16.3934 19.6021C16.2706 19.656 16.1218 19.683 15.947 19.683C15.7773 19.683 15.6299 19.6567 15.5049 19.6042C15.3806 19.5516 15.2833 19.4749 15.213 19.3741C15.1434 19.2732 15.1058 19.1504 15.1001 19.0055H15.4889C15.4946 19.0815 15.5181 19.1447 15.5593 19.1951C15.6005 19.2455 15.6541 19.2832 15.7201 19.308C15.7869 19.3329 15.8615 19.3453 15.9438 19.3453C16.0298 19.3453 16.1051 19.3325 16.1697 19.307C16.235 19.2807 16.2862 19.2445 16.3231 19.1983C16.36 19.1514 16.3789 19.0967 16.3796 19.0342C16.3789 18.9774 16.3622 18.9305 16.3295 18.8936C16.2968 18.856 16.251 18.8247 16.1921 18.7999C16.1338 18.7743 16.0657 18.7516 15.9875 18.7317L15.7393 18.6678C15.5596 18.6216 15.4176 18.5516 15.3132 18.4579C15.2095 18.3634 15.1576 18.2381 15.1576 18.0818C15.1576 17.9533 15.1924 17.8407 15.262 17.7441C15.3323 17.6475 15.4279 17.5726 15.5486 17.5193C15.6693 17.4653 15.8061 17.4384 15.9588 17.4384C16.1136 17.4384 16.2492 17.4653 16.3657 17.5193C16.4829 17.5726 16.5749 17.6468 16.6416 17.742C16.7084 17.8364 16.7429 17.9451 16.745 18.068H16.3647Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.48 19.65V17.4681H13.8752V19.3186H14.8362V19.65H13.48Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.7386 17.4681L12.2191 18.2671H12.2362L12.7188 17.4681H13.1694L12.4972 18.559L13.18 19.65H12.7219L12.2362 18.8563H12.2191L11.7333 19.65H11.2773L11.9666 18.559L11.2859 17.4681H11.7386Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.7588 19.6734C10.6942 19.6734 10.6388 19.6507 10.5926 19.6052C10.5464 19.5598 10.5237 19.5044 10.5244 19.439C10.5237 19.3751 10.5464 19.3204 10.5926 19.275C10.6388 19.2295 10.6942 19.2068 10.7588 19.2068C10.8213 19.2068 10.8756 19.2295 10.9218 19.275C10.9687 19.3204 10.9925 19.3751 10.9932 19.439C10.9925 19.4824 10.9811 19.5218 10.9591 19.5573C10.9378 19.5928 10.9094 19.6212 10.8739 19.6425C10.8391 19.6631 10.8007 19.6734 10.7588 19.6734Z", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.4157 14.313H7.91674C7.44049 14.313 7.05273 13.839 7.05273 13.2555V9.26623C7.05273 8.68348 7.44049 8.20947 7.91674 8.20947H13.418C13.8935 8.20947 14.2812 8.68348 14.2812 9.26623V13.2555C14.279 13.839 13.8912 14.313 13.4157 14.313ZM7.91674 8.74947C7.68349 8.74947 7.49449 8.98123 7.49449 9.26623V13.2555C7.49449 13.5405 7.68349 13.7722 7.91674 13.7722H13.418C13.6505 13.7722 13.8395 13.5405 13.8395 13.2555V9.26623C13.8395 8.98123 13.6505 8.74947 13.418 8.74947H7.91674Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.0582 11.9107H7.27148V12.4515H14.0582V11.9107Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.0582 10.0568H7.27148V10.5975H14.0582V10.0568Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.32 8.47949H11.7793V14.0422H12.32V8.47949Z", fill: "#00C650" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.55002 8.47949H9.00928V14.0422H9.55002V8.47949Z", fill: "#00C650" })
      ]
    }
  )
);
FileXls.displayName = "FileXls";
var FileXls_default = FileXls;
var Folder = react.forwardRef(
  ({ size = 24, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.97949 4.03259H10.002C10.7226 4.03259 11.4329 4.44172 12.1611 4.86365C12.8816 5.28107 13.6204 5.7113 14.3779 5.7113H16.3027C17.1058 5.7113 17.7048 5.71077 18.1797 5.74939C18.6537 5.78794 18.999 5.86483 19.2959 6.01599C19.824 6.28514 20.2543 6.71538 20.5234 7.24353C20.6746 7.54039 20.7515 7.88574 20.79 8.35974C20.8287 8.83463 20.8281 9.4336 20.8281 10.2367V15.4418C20.8281 16.2448 20.8287 16.8438 20.79 17.3187C20.7515 17.7927 20.6746 18.1381 20.5234 18.4349C20.2543 18.9631 19.824 19.3933 19.2959 19.6625C18.999 19.8136 18.6537 19.8905 18.1797 19.9291C17.7048 19.9677 17.1058 19.9672 16.3027 19.9672H7.69824C6.89519 19.9672 6.29619 19.9677 5.82129 19.9291C5.34729 19.8905 5.00192 19.8136 4.70508 19.6625C4.17695 19.3933 3.74667 18.9631 3.47754 18.4349C3.32637 18.1381 3.24949 17.7927 3.21094 17.3187C3.17232 16.8438 3.17285 16.2448 3.17285 15.4418V6.84021C3.17285 5.28978 4.42913 4.03274 5.97949 4.03259Z", fill: "#5585FF", stroke: "url(#paint0_linear_330142_570)", strokeWidth: "0.114589" }),
        /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "4.875", y: "6.75", width: "14.25", height: "6.75", rx: "2.25", fill: "white" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.66309 8.68262H16.3369C17.1507 8.68262 17.7667 8.67925 18.2568 8.71289C18.7465 8.74651 19.1052 8.81657 19.4062 8.95801C19.9422 9.20996 20.3723 9.60675 20.6445 10.0996C20.7969 10.3757 20.8727 10.7042 20.9092 11.1543C20.9457 11.6054 20.9424 12.1727 20.9424 12.9238V15.5762C20.9424 16.3273 20.9457 16.8946 20.9092 17.3457C20.8727 17.7958 20.7969 18.1243 20.6445 18.4004C20.3723 18.8933 19.9422 19.29 19.4062 19.542C19.1052 19.6834 18.7465 19.7535 18.2568 19.7871C17.7667 19.8208 17.1507 19.8174 16.3369 19.8174H7.66309C6.84925 19.8174 6.23335 19.8208 5.74316 19.7871C5.25352 19.7535 4.89477 19.6834 4.59375 19.542C4.05779 19.29 3.62766 18.8933 3.35547 18.4004C3.20306 18.1243 3.12725 17.7958 3.09082 17.3457C3.05434 16.8946 3.05762 16.3273 3.05762 15.5762V12.9238C3.05762 12.1727 3.05434 11.6054 3.09082 11.1543C3.12725 10.7042 3.20306 10.3757 3.35547 10.0996C3.62766 9.60675 4.05779 9.20996 4.59375 8.95801C4.89477 8.81657 5.25352 8.74651 5.74316 8.71289C6.23335 8.67925 6.84925 8.68262 7.66309 8.68262Z", fill: "#5585FF", stroke: "url(#paint1_linear_330142_570)", strokeWidth: "0.114589" }),
        /* @__PURE__ */ jsxRuntime.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntime.jsxs("linearGradient", { id: "paint0_linear_330142_570", x1: "3.11523", y1: "3.97498", x2: "22.9598", y2: "17.6932", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "0.228092", stopColor: "#85BFF8" }),
            /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "0.946844", stopColor: "#0567E4" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("linearGradient", { id: "paint1_linear_330142_570", x1: "3", y1: "8.625", x2: "17.8687", y2: "23.4783", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "0.228092", stopColor: "#85BFF8" }),
            /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "0.946844", stopColor: "#0567E4" })
          ] })
        ] })
      ]
    }
  )
);
Folder.displayName = "Folder";
var Folder_default = Folder;

exports.Colored = colored_exports;
exports.Filled = filled_exports;
exports.Outlined = outlined_exports;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map