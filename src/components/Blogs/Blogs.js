import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className=''><h2> Difference between authorization and authentication?</h2>
                <p>ans: Authorization means varifying users identity on the other hand Authentication means the proccess of determining which applications, files, data user has access to.</p>
            </div>
            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>ans:Using firebase we can easily implement user signup, signin, signout etc.
                    The other options are:
                    Active Directory.
                    OpenID Connect.
                    Custom Java Provider.
                    OpenID Connect Authentication Proxy.
                    IBM Cognos Series 7.
                    LDAP.
                    SAP.
                    SiteMinder
                </p>
            </div>
            <div>
                <h2>What other services does firebase provide other than authentication</h2>
                <p>Firebase provides cloud firestore, Cloud Functions,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging etc other than authentications.
                </p>
            </div>


        </div>
    );
};

export default Blogs;