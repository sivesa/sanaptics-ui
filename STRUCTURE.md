Directory structure:
└── sivesa-sanaptics-ui/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.test.tsx
        ├── App.tsx
        ├── index.css
        ├── index.tsx
        ├── main.tsx
        ├── react-app-env.d.ts
        ├── reportWebVitals.ts
        ├── setupTests.ts
        ├── svg.d.ts
        ├── vite-env.d.ts
        ├── assets/
        │   └── styles/
        │       └── global.css
        ├── components/
        │   ├── analytics/
        │   │   ├── CountryMap.tsx
        │   │   ├── GradeAverage.tsx
        │   │   ├── MonthlyTarget.tsx
        │   │   ├── RecentOrders.tsx
        │   │   ├── StatisticsChart.tsx
        │   │   └── SubjectPerformance.tsx
        │   ├── auth/
        │   │   └── SignInForm.tsx
        │   ├── charts/
        │   │   ├── BarChart.tsx
        │   │   ├── bar/
        │   │   │   └── BarChartOne.tsx
        │   │   └── line/
        │   │       └── LineChartOne.tsx
        │   ├── common/
        │   │   ├── Button.tsx
        │   │   ├── ChartTab.tsx
        │   │   ├── ComponentCard.tsx
        │   │   ├── GridShape.tsx
        │   │   ├── PageBreadCrumb.tsx
        │   │   ├── PageMeta.tsx
        │   │   ├── ScrollToTop.tsx
        │   │   ├── ThemeToggleButton.tsx
        │   │   └── ThemeTogglerTwo.tsx
        │   ├── form/
        │   │   ├── date-picker.tsx
        │   │   ├── Form.tsx
        │   │   ├── Label.tsx
        │   │   ├── MultiSelect.tsx
        │   │   ├── Select.tsx
        │   │   ├── form-elements/
        │   │   │   ├── CheckboxComponents.tsx
        │   │   │   ├── DefaultInputs.tsx
        │   │   │   ├── DropZone.tsx
        │   │   │   ├── FileInputExample.tsx
        │   │   │   ├── InputGroup.tsx
        │   │   │   ├── InputStates.tsx
        │   │   │   ├── RadioButtons.tsx
        │   │   │   ├── SelectInputs.tsx
        │   │   │   ├── TextAreaInput.tsx
        │   │   │   └── ToggleSwitch.tsx
        │   │   ├── group-input/
        │   │   │   └── PhoneInput.tsx
        │   │   ├── input/
        │   │   │   ├── Checkbox.tsx
        │   │   │   ├── FileInput.tsx
        │   │   │   ├── InputField.tsx
        │   │   │   ├── Radio.tsx
        │   │   │   ├── RadioSm.tsx
        │   │   │   └── TextArea.tsx
        │   │   └── switch/
        │   │       └── Switch.tsx
        │   ├── header/
        │   │   ├── Header.tsx
        │   │   ├── NotificationDropdown.tsx
        │   │   └── UserDropdown.tsx
        │   ├── layout/
        │   │   └── Navbar.tsx
        │   ├── tables/
        │   │   ├── DataTable.tsx
        │   │   └── BasicTables/
        │   │       └── BasicTableOne.tsx
        │   ├── ui/
        │   │   ├── alert/
        │   │   │   └── Alert.tsx
        │   │   ├── avatar/
        │   │   │   └── Avatar.tsx
        │   │   ├── badge/
        │   │   │   └── Badge.tsx
        │   │   ├── button/
        │   │   │   └── Button.tsx
        │   │   ├── dropdown/
        │   │   │   ├── Dropdown.tsx
        │   │   │   └── DropdownItem.tsx
        │   │   ├── images/
        │   │   │   ├── ResponsiveImage.tsx
        │   │   │   ├── ThreeColumnImageGrid.tsx
        │   │   │   └── TwoColumnImageGrid.tsx
        │   │   ├── modal/
        │   │   │   └── index.tsx
        │   │   ├── table/
        │   │   │   └── index.tsx
        │   │   └── videos/
        │   │       ├── AspectRatioVideo.tsx
        │   │       ├── FourIsToThree.tsx
        │   │       ├── OneIsToOne.tsx
        │   │       ├── SixteenIsToNine.tsx
        │   │       └── TwentyOneIsToNine.tsx
        │   └── UserProfile/
        │       ├── UserAddressCard.tsx
        │       ├── UserInfoCard.tsx
        │       └── UserMetaCard.tsx
        ├── constants/
        │   ├── apiEndpoints.ts
        │   ├── roles.ts
        │   └── routes.ts
        ├── context/
        │   ├── SidebarContext.tsx
        │   └── ThemeContext.tsx
        ├── features/
        │   ├── Calendar.tsx
        │   ├── Feedback.tsx
        │   ├── Performance.tsx
        │   ├── Resources.tsx
        │   ├── Settings.tsx
        │   ├── UserProfiles.tsx
        │   ├── Admin/
        │   │   └── Dashboard.tsx
        │   ├── analytics/
        │   │   ├── components/
        │   │   │   └── PerformanceCharts.tsx
        │   │   ├── pages/
        │   │   │   └── AnalyticsDashboard.tsx
        │   │   └── services/
        │   │       └── analyticsApi.ts
        │   ├── auth/
        │   │   ├── components/
        │   │   │   └── LoginForm.tsx
        │   │   ├── services/
        │   │   │   └── authApi.ts
        │   │   └── slices/
        │   │       └── authSlice.ts
        │   ├── AuthPages/
        │   │   ├── AuthPageLayout.tsx
        │   │   └── SignIn.tsx
        │   ├── Charts/
        │   │   ├── BarChart.tsx
        │   │   └── LineChart.tsx
        │   ├── communication/
        │   │   ├── components/
        │   │   │   └── ChatBox.tsx
        │   │   ├── pages/
        │   │   │   └── MessagingPage.tsx
        │   │   └── services/
        │   │       └── communicationApi.ts
        │   ├── Dashboard/
        │   │   └── Home.tsx
        │   ├── Forms/
        │   │   └── FormElements.tsx
        │   ├── learner/
        │   │   ├── components/
        │   │   │   └── ReportViewer.tsx
        │   │   ├── pages/
        │   │   │   └── LearnerDashboard.tsx
        │   │   ├── services/
        │   │   │   └── learnerApi.ts
        │   │   └── slices/
        │   │       └── learnerSlice.ts
        │   ├── OtherPage/
        │   │   └── NotFound.tsx
        │   ├── parent/
        │   │   ├── AcademicHistory.tsx
        │   │   ├── Contacts.tsx
        │   │   ├── ParentDashboard.tsx
        │   │   ├── ParentProfiles.tsx
        │   │   ├── components/
        │   │   │   └── NotificationsPanel.tsx
        │   │   ├── pages/
        │   │   │   └── ParentDashboard.tsx
        │   │   ├── services/
        │   │   │   └── parentApi.ts
        │   │   └── slices/
        │   │       └── parentSlice.ts
        │   ├── Tables/
        │   │   └── BasicTables.tsx
        │   └── teacher/
        │       ├── Announcements.tsx
        │       ├── AtRisk.tsx
        │       ├── Dashboard.tsx
        │       ├── Marks.tsx
        │       ├── MyFeedback.tsx
        │       ├── components/
        │       │   └── UploadMarksForm.tsx
        │       ├── pages/
        │       │   └── TeacherDashboard.tsx
        │       ├── services/
        │       │   └── teacherApi.ts
        │       └── slices/
        │           └── teacherSlice.ts
        ├── hooks/
        │   ├── useAuth.ts
        │   ├── useFetch.ts
        │   ├── useGoBack.ts
        │   ├── useModal.ts
        │   └── useRole.ts
        ├── icons/
        │   └── index.ts
        ├── layout/
        │   ├── AppHeader.tsx
        │   ├── AppLayout.tsx
        │   ├── AppSidebar.tsx
        │   ├── Backdrop.tsx
        │   └── SidebarWidget.tsx
        ├── routes/
        │   ├── index.tsx
        │   └── ProtectedRoute.tsx
        ├── services/
        │   └── api.ts
        ├── store/
        │   └── index.ts
        ├── types/
        │   └── index.d.ts
        └── utils/
            └── helpers.ts
