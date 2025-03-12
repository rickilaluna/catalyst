import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Award, User, Settings, FileText, BarChart, Lightbulb, Calendar } from "lucide-react"

export default function ProfilePage() {
  const userProfile = {
    name: "Ricki Munoz",
    level: "Advanced AI UX Designer",
    joined: "March 2025",
    email: "rickilaluna@gmail.com",
    avatar: "/placeholder.svg?height=100&width=100",
    stats: {
      completed: 2,
      inProgress: 2,
      totalHours: 11.5,
      streak: 5,
    },
  }

  const learningPaths = [
    {
      id: "introduction",
      title: "Introduction to AI in UX Design",
      progress: 60,
      lastAccessed: "2 days ago",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "design-builder",
      title: "From Designer to Design Builder",
      progress: 25,
      lastAccessed: "1 week ago",
      image: "/placeholder.svg?height=100&width=180",
    },
  ]

  const completedModules = [
    {
      id: "design-basics",
      title: "Understanding Design Basics & Challenges",
      completedDate: "March 1, 2025",
      image: "/placeholder.svg?height=60&width=100",
    },
  ]

  const certificates: { title: string; date: string }[] = []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-end mb-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/profile/settings">
                    <Settings className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-secondary flex items-center justify-center">
                  <img
                    src={userProfile.avatar || "/placeholder.svg"}
                    alt={userProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{userProfile.name}</CardTitle>
                <CardDescription>
                  {userProfile.level} • Joined {userProfile.joined}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="font-bold text-2xl">{userProfile.stats.completed}</div>
                  <div className="text-xs text-muted-foreground">Modules Completed</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="font-bold text-2xl">{userProfile.stats.inProgress}</div>
                  <div className="text-xs text-muted-foreground">Paths In Progress</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="font-bold text-2xl">{userProfile.stats.totalHours}</div>
                  <div className="text-xs text-muted-foreground">Learning Hours</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="font-bold text-2xl">{userProfile.stats.streak}</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <User className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">{userProfile.email}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">{userProfile.level} UX Designer</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Member since {userProfile.joined}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/profile/edit">Edit Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="progress">Learning Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="progress">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Learning Paths In Progress</h2>
                  {learningPaths.length > 0 ? (
                    <div className="space-y-4">
                      {learningPaths.map((path) => (
                        <Card key={path.id}>
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                              <img
                                src={path.image || "/placeholder.svg"}
                                alt={path.title}
                                className="w-full md:w-24 h-16 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h3 className="font-medium mb-1">{path.title}</h3>
                                <div className="flex items-center text-xs text-muted-foreground mb-2">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>Last accessed {path.lastAccessed}</span>
                                </div>
                                <div className="mb-2">
                                  <div className="h-2 bg-secondary rounded-full">
                                    <div
                                      className="h-2 bg-primary rounded-full"
                                      style={{ width: `${path.progress}%` }}
                                    ></div>
                                  </div>
                                  <div className="flex justify-between text-xs mt-1">
                                    <span>{path.progress}% complete</span>
                                  </div>
                                </div>
                              </div>
                              <Button size="sm" asChild>
                                <Link href={`/trails/${path.id}`}>Continue</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Lightbulb className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">You haven't started any learning paths yet.</p>
                        <Button className="mt-4" asChild>
                          <Link href="/trails">Browse Learning Paths</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Completed Modules</h2>
                  {completedModules.length > 0 ? (
                    <div className="space-y-4">
                      {completedModules.map((module) => (
                        <Card key={module.id}>
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                              <img
                                src={module.image || "/placeholder.svg"}
                                alt={module.title}
                                className="w-full md:w-16 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h3 className="font-medium">{module.title}</h3>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>Completed on {module.completedDate}</span>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" asChild>
                                <Link href={`/modules/${module.id}`}>Review</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">You haven't completed any modules yet.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Certificates</h2>
                  {certificates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certificates.map((cert, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <Award className="h-10 w-10 text-primary" />
                              <div>
                                <h3 className="font-medium">{cert.title}</h3>
                                <p className="text-xs text-muted-foreground">Issued on {cert.date}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Award className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          Complete a learning path to earn your first certificate.
                        </p>
                        <Button className="mt-4" asChild>
                          <Link href="/trails">View Learning Paths</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Badges</h2>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <BarChart className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Coming soon! Earn badges as you progress through the platform.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your learning activity over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg mb-4">
                    <div className="text-center">
                      <BarChart className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Activity chart will appear here</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-3 border rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Completed "Understanding Design Basics"</h3>
                        <p className="text-xs text-muted-foreground">March 1, 2025 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 border rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Started "From Designer to Design Builder"</h3>
                        <p className="text-xs text-muted-foreground">February 28, 2025 at 10:15 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 border rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Created account</h3>
                        <p className="text-xs text-muted-foreground">February 27, 2025 at 9:00 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

