
import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    runtime: 'edge',
};


// Make sure the font exists in the specified path:
const font = fetch(new URL('../../../assets/fonts/Poppins-Bold.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

export default async function GET(req: NextRequest) {

    const fontData = await font;

    const { searchParams } = new URL(req.url);

    try {
        const slug = searchParams.get("slug");
        if (!slug) return
        if (slug == "og_image.png") {
            return defaultOGImage();
        }

        const post = JSON.parse(`{${slug.split("_&_").map(el => {
            const keyValue = el.split(":");
            return `"${keyValue[0]}":"${keyValue[1].replaceAll("_", " ")}"`
        }).join(",")}}`);

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#F5F9FF',
                        color: "#0F172A",
                        padding: 60,
                        // fontWeight: 500,

                    }}
                >
                    <div style={{
                        position: 'absolute',
                        backgroundColor: "#DCEAFF",
                        top: 0,
                        right: 0,
                        width: 700,
                        height: 350,
                        zIndex: 1,
                        borderBottomLeftRadius: 350,
                    }} />
                    <div style={{
                        position: 'absolute',
                        backgroundColor: "#DEDBFC",
                        bottom: 0,
                        left: 0,
                        width: 500,
                        height: 50,
                        zIndex: 1,
                        borderTopRightRadius: 150,
                    }} />

                    <div style={{
                        position: 'absolute',
                        backgroundColor: "#F2D7F9",
                        top: 350,
                        right: 550,
                        width: 150,
                        height: 150,
                        zIndex: 1,
                        borderRadius: 75,
                    }} />
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        // zIndex: 99,
                        height: '100%',
                        width: '100%',
                        fontSize: 17,
                    }}>
                        <div>{post.publiched_at ?? ""}</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: 80, fontWeight: 900, textTransform: 'uppercase' }}>{post.title ?? ""}</div>
                            <div>{post.tags ?? ""}</div>
                        </div>
                        <p style={{ fontSize: 25, marginBottom: 25 }}>{post.description ?? ""}</p>
                        <div style={{
                            display: 'flex',
                            msFlexDirection: "row",
                            WebkitFlexDirection: "row",
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <img style={{ borderRadius: 20, marginRight: 10 }} height="40" width="40" src="https://avatars.githubusercontent.com/u/38505761" alt="hassan BENADARODOR" /> Beno developer
                        </div>
                    </div>
                </div>

            ),
            {
                width: 1200,
                height: 600,
                fonts: [
                    {
                      name: 'Poppins',
                      data: fontData,
                      style: 'normal',

                    },
                  ],
            },
        );
    } catch (e) {
        console.error(e);
        return new Response('internal server error', { status: 500, });
    }

}


const defaultOGImage = () => new ImageResponse(
    (
        <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                backgroundColor: '#FFFFFF',
                color: "#1F1F1F",
                padding: 60,
                justifyContent: "center",
                alignItems:"center",
                fontFamily: '"Poppins"',
                fontWeight: "bold"
            }}
        >
            <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                // zIndex: 99,
                fontSize: 17,
            }}>
                <div style={{ display: 'flex', flexDirection: 'column',  
                alignItems: 'center',}}>
                <img
                    alt="Vercel"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEzMiIgdmlld0JveD0iMCAwIDEyMCAxMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01OS43OTY3IDY1LjUyMjRIMzIuOTQ5M0MxNC42NDQyIDY1LjUyMjQgMCA1MC44NzEzIDAgMzIuOTY0OEMwIDE0LjY1MSAxNC42NDQyIDAgMzIuOTQ5MyAwSDU5Ljc5NjdWNjUuNTIyNEg4Ny4wNTA3QzEwNC45NDkgNjUuNTIyNCAxMTkuNTkzIDgwLjE3MzQgMTIwIDk4LjA4QzEyMCAxMTYuMzk0IDEwNC45NDkgMTMxLjA0NSA4Ny4wNTA3IDEzMS4wNDVINTkuNzk2N1Y2NS41MjI0WiIgZmlsbD0iIzIxNjVGNCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzIgMTIuNjE2MUg4OC4yNzExQzk5LjI1NDMgMTIuNjE2MSAxMDguMjAzIDIxLjU2OTYgMTA4LjIwMyAzMi45NjQ4QzEwOC4yMDMgNDMuOTUyOCA5OS4yNTQzIDUyLjkwNjMgODguMjcxMSA1Mi45MDYzSDcyVjEyLjYxNjFaIiBmaWxsPSIjMjE2NUY0Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg=="
                    style={{ margin: '30px' }}
                    />
                    <div style={{ fontSize: 64, textTransform: 'uppercase' }}>Beno developer</div>
                    <div style={{ fontSize: 34, letterSpacing: 13 }}>Software developer</div>
                </div>
            </div>
        </div>

    ),
    {
        width: 1200,
        height: 600,
    },
);