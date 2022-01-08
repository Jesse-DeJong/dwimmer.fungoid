// Admin - Behind the scenes, API to help streamline interaction for misch and make it easy to upload new images, alter/interact with the constructed functions (eg add/remove format options? or relegate this to manually myself update/change a feature directly in the code under a new or expanded function rather than offer control that would require extra features to interact with and render etc not worth if its going to be too expansive or to restrictive to have been worth the effort in the first place, stick to creating/updating new logo JSON files (or dww files that can be run through the converter() that just pass on the chosen array to recreate the ASCII to renderImage() ))
    
    // JWT / Global state containing login status or cookie
    // - (login system, accessed directly from a www.website.com/admin, no signup or user accessible buttons/promts whatever to indicate access to or direct to it,
    // - just a precreated account for mish with password (maybe a one time setup sys I guess for him to set his own password privately rather than it just staying a dummy thing for dev purposes
    // - (#professionalism, it must be done right, but maybe prioritised much later so the focus is on implementing the more important features first)
    // - Menu/interface/admin whatever (preferably ASCII styled to maintain the theme, but as not a clientfacing area less of a priority)
    //     - undertake all the dev/mgmt tasks like continued additions (uploads) to the gallary (database entries of the JSON arrays or 'dww arrays' if writing a function to convert them rather than have them exported as JSON rather than their normal VB format, another thing that seems unessecary, very low prio since its not hard to just export as JSON in the first place) 
    //     - through easy custom APIs accessible from that logged in to the /admin page (copy JWT implementation from other site to handle pw hashing and global logged in state to manage who can access the APIs and maintain logged in status across state refreshes)
    //     - (API to interact with image objects stored in MONGO DB) Upload json / edit json? / Delete json / 
    //     - user adjustable variables to alter the renderImage() and underlying functions (eg tweak % thresholds for logos etc from a user accessible variable defaulted to prescribed (eyeballed?) values, options to control/change/modify the transition effect and options for things like frequency the image will be displayed if randomly changing/formumatically determined)
    //      - stats
    const Admin = () => {
    
        return (
            <h1>ADMIN</h1>
            )
    
    }
    
    export default Admin;