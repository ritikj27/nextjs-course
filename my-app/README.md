## React server components

-server comp
 && in nextjs all compoents are server compoents by deafult
 && they have the ablity to run tasks like reading files or fetching data from a db.
 && howerver ,they don,t have the ability to use hooks or handle user interaction .
&& client comp
 - to create client comp,its necessary to add "use client" at the top of component file


# routing
    &&** nextjs has a file system based routing mechanism
    &&** url paths that users can access in the brower are defined by files and folder in ur codebase .


# Routing Conventions
    ** All routes must be placed inside the app folder
    ** Every file that corresponds to a route must be named page.js or page.tsx
    ** Every folder corresponds to a path segment in the browser URL


# app folder
 #page.tsx -> home page
 #folfer -> page.tsx repsent new route


# nested routes
 /blogs
 /blogs/first
 /blogs/second

# dyncamic routes
/products
/products/id
    #app folder
    #page.tsx -> home page
    #products -> page.tsx,#[id] folder ->page.tsx

    import React from 'react'

    export default function ProductDetails({params}:any) {
    return (
        <div>ProductDetails {params.productid}</div>
    )
    }


# nested dynamic routes
/product/id
/product/1/review/1


# catch-all segment
/docs/feature1/concept1
/docs/feature2/concept2
/docs/feature2/concept1
/docs/feature1/concept2

 - we can use
    #folderDocs
        #[...slug]
            -page.tsx

    ** to view without any slug (/docs) ([[...slug]])


# not found page
    ** use app>not-found.tsx file

    ** there a one notFound() are aslo there


# Private Folders
    ** A private folder indicates that it is a private implementation detail and should not be considered by the routing system
    T** he folder and all its subfolders are excluded from routing
    ** prefix the name with underscore


## Private Folders contd.
 ** For separating Ul logic from routing logic
 ** For consistently organizing internal files across a project
 ** For sorting and grouping files in code editors
 ** And finally, for avoiding potential naming conflicts with future Next.js file conventions


## Route Groups
 ** Allows us to logically group our routes and project files without affecting the URL path structure
** Let's implement authentication routes
    Register
    Login
    Forgot password
 ## one options we make auth folder

    #auth
        #login
        #register
        #forgetPwd

## second options we make (auth) folder

    #(auth) using parenthis
        #login
        #register
        #forgetPwd
