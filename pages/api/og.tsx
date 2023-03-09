import { ImageResponse } from '@vercel/og';
import { NextRequest, NextResponse } from 'next/server';
import zod from "zod"

export const config = {
    runtime: 'edge',
};
const emptyPost = {
    title: "title",
    description: "description",
    tags: "tags",
    publiched_at: "publishedDate",
}
export default function handler(req: NextRequest, res: NextResponse): ImageResponse | NextResponse {

    const { searchParams } = new URL(req.url);
    try {

        const post = JSON.parse(searchParams.get('post') ?? "{}");
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
                        fontWeight: 500
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
                        zIndex: 99,
                        height: '100%',
                        width: '100%',
                        fontSize: 17,
                    }}>
                        <div>{post.publiched_at ?? ""}</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: 80, fontWeight: 700, textTransform: 'uppercase' }}>{post.title ?? ""}</div>
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
            },
        );

    } catch (e) {
        return NextResponse.rewrite(new URL(`/not-found`, req.url));
    }


}
