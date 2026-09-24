import {NextResponse} from 'next/server';
export async function GET(){return NextResponse.json({bots:[]});}
export async function POST(){return NextResponse.json({error:'NOT_CONFIGURED'},{status:503});}
export async function DELETE(){return NextResponse.json({error:'NOT_CONFIGURED'},{status:503});}
