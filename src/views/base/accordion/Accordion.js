// import React from 'react'
// import { CCard,CCardBody,CCardHeader,CCol,CRow,CAccordion,CAccordionBody,CAccordionHeader,CAccordionItem,
// } from '@coreui/react'
// import { DocsExample } from 'src/components'

// const Accordion = () => {
//   return (
//     <CRow>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Accordion</strong>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-body-secondary small">
//               Click the accordions below to expand/collapse the accordion content.
//             </p>
//             <DocsExample href="components/accordion">
//               <CAccordion activeItemKey={2}>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={2}>
//                   <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={3}>
//                   <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Accordion</strong> <small>Flush</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-body-secondary small">
//               Add <code>flush</code> to remove the default <code>background-color</code>, some
//               borders, and some rounded corners to render accordions edge-to-edge with their parent
//               container.
//             </p>
//             <DocsExample href="components/accordion#flush">
//               <CAccordion flush>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={2}>
//                   <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={3}>
//                   <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Accordion</strong> <small>Always open</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-body-secondary small">
//               Add <code>alwaysOpen</code> property to make accordion items stay open when another
//               item is opened.
//             </p>
//             <DocsExample href="components/accordion#flush">
//               <CAccordion alwaysOpen>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={2}>
//                   <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//                 <CAccordionItem itemKey={3}>
//                   <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
//                     default, until the collapse plugin adds the appropriate classes that we use to
//                     style each element. These classes control the overall appearance, as well as the
//                     showing and hiding via CSS transitions. You can modify any of this with custom
//                     CSS or overriding our default variables. It&#39;s also worth noting that just
//                     about any HTML can go within the <code>.accordion-body</code>, though the
//                     transition does limit overflow.
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default Accordion
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'assets/css/icons.min.css';
//import 'assets/css/app.min.css';

const Login = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-4 d-flex justify-content-center align-items-center min-vh-100">
          <div className="w-100 p-4">
            <div className="text-center">
              <a href="index.html" className="authentication-logo">
                <img
                  src="assets/images/logo-dark.png"
                  // alt="Logo Dark"
                  height={20}
                  className="auth-logo logo-dark mx-auto"
                />
                <img
                  src="assets/images/logo-light.png"
                  // alt="Logo Light"
                  height={20}
                  className="auth-logo logo-light mx-auto"
                />
              </a>
              <h4 className="font-size-18 mt-4">Welcome Back!</h4>
              <p className="text-muted">Sign in to continue to Nazox.</p>
            </div>
            <div className="p-2 mt-5">
              <form action="index.html">
                <div className="mb-3 auth-form-group-custom">
                  <i className="ri-user-2-line auti-custom-input-icon"></i>
                  <label htmlFor="username" className="fw-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-3 auth-form-group-custom">
                  <i className="ri-lock-2-line auti-custom-input-icon"></i>
                  <label htmlFor="userpassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="userpassword"
                    placeholder="Enter password"
                  />
                </div>
                {/* <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customControlInline"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="customControlInline"
                  >
                    Remember me
                  </label>
                </div> */}
                <div className="mt-4 text-center">
                  <button
                    className="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <a href="auth-recoverpw.html" className="text-muted">
                    <i className="mdi mdi-lock me-1"></i> Forgot your password?
                  </a>
                </div>
              </form>
            </div>
            <div className="mt-5 text-center">
              <p>
                Don't have an account?{" "}
                <a
                  href="auth-register.html"
                  className="fw-medium text-primary"
                >
                  Register
                </a>
              </p>
              <p>
                © Nazox. Crafted with{" "}
                <i className="mdi mdi-heart text-danger"></i> by Themesdesign
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-none d-lg-block">
          <div className="authentication-bg">
            <div className="bg-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

// const Login = () => {
//   return (
//     // <CCard className="mb-4">
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//             <CCard className="p-4 mb-4">
//               <CCard className="p-4 mb-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-body-secondary">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput placeholder="Username" autoComplete="username" />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//                 </CCard>
//               </CCard>
//               {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard> */}
//             </CCardGroup>
           
//           </CCol>
          
//         </CRow>
//       </CContainer>
//     </div>
//     // </CCard>
//   )
// }

// export default Login
