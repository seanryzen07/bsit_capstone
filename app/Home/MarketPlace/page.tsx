import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/CardButton"
import { Field } from "@/components/ui/field"
import { ArrowLeft, ArrowRight, Check, CheckSquare2, CheckSquareIcon, Star } from "lucide-react"
import { Checkbox } from "radix-ui"


export default function DashboardPage() {
  return (
    <div className="w-full  px-6">
      <div className="w-full flex flex-row mt-4 gap-4">
        <div className="w-100" >
          <Card className="w-full h-screen">
            <CardHeader>
              <CardTitle>
                Filter  
              </CardTitle>
            </CardHeader>
            <CardContent>
               <CheckSquareIcon/>
               <p>Relanvance</p>

               <CheckSquareIcon/>
               <p>Latest</p>

               <CheckSquareIcon/>
               <p>Top sales</p>

              <p className="mt-4">Price Range</p>
               <div className="grid grid-cols-3 w-100px gap-1 ">
                
                  <Card className=" w-50px">
                    <CardContent>
                      <form>
                        <Field>
                          <input 
                          id="price-range-low"
                          type="Text"
                          placeholder="MIN"/>
                        </Field>
                      </form>
                    </CardContent>
                  </Card>

                  <div className="text-4xl ml-7 mr-2">
                    <p>=</p>
                  </div>

                  <Card>
                    <CardContent>
                      <form>
                        <Field>
                          <input 
                            type="text" 
                            id="price-range-high" 
                            name="price-range-high" 
                            placeholder="MAX" />
                        </Field>
                      </form>
                    </CardContent>
                  </Card>
               </div>
              
              {/* Rating */}
              <p className="mt-10">Rating</p>
              <div className="grid grid-cols-6">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <button><ArrowRight/></button>
              </div>

              <div className="grid grid-cols-6 mt-2">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#ffffff"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <button><ArrowRight/></button>
              </div>

              <div className="grid grid-cols-6 mt-2">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#ffffff"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#ffffff"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <button><ArrowRight/></button>
              </div>
              
              <div className="grid grid-cols-6 mt-2">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#fff100"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#ffffff"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#ffffff"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#ffffff"} viewBox={"2 2 20 20"}><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                <button><ArrowRight/></button>
              </div>

              
            </CardContent>
          </Card>
        </div>

        {/* Service Choices */}
        <div className="w-full">
          
          <Card className="w-full h-screen">
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 ">
                <Button >
                  <Card className="w-full h-500px">
                    <CardHeader>
                      <CardTitle>C1</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>PHP 2500</p>
                      <p>Video editor</p>
                    </CardContent>
                  </Card>
                </Button>

                <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>C1</CardTitle>
                  <CardContent>
                    <p>PHP 2500</p>
                    <p>Video editor</p>
                  </CardContent>
                </CardHeader>
              </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    

  )
}