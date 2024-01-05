import mongoose from 'mongoose'

const id: string = 'wkdwnsghd617'
const password: string = '1heKZzmHNNyKLFbh'
const connectionString: string = `mongodb+srv://${id}:${password}@cluster0.adgnrvm.mongodb.net/?retryWrites=true&w=majority`

export async function connectDB(): Promise<void> {
    await mongoose.connect(connectionString)
    console.log('Connected!')
}